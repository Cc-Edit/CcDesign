import { MouseEvent } from 'react';
import { List } from '@mui/material';
import html2canvas from 'html2canvas';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectComponents, deleteComponents, Component, pasteComponent } from '@/store/slice/Design';
import TreeItem from './TreeItem';
import EmptyContainer from '@/components/Design/components/EmptyContainer';
import { useConfirm } from 'material-ui-confirm';
import { savaComponentTemplate } from '@api/template';
import { useSnackbar } from 'notistack';
import { uploadFiles } from '@api/oss';
import { Domain } from '@/config/constant';

export default function ComponentTree() {
  const layoutConfig = useAppSelector(state => state.design.layout);
  const attributeMap = useAppSelector(state => state.design.attribute);
  const apiMap = useAppSelector(state => state.design.api);
  const eventMap = useAppSelector(state => state.design.event);
  const selectIds = useAppSelector(state => state.design.selectIds);
  const dispatch = useAppDispatch();
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const handleListItemClick = (event:MouseEvent, selectId: string) => {
    event.stopPropagation();
    dispatch(selectComponents([selectId]));
  };
  function handleEvents(event: MouseEvent, type: string, component: Component) {
    event.stopPropagation();
    switch (type) {
      case 'delete':
        dispatch(deleteComponents([component.id]));
        dispatch(selectComponents([]));
        break;
      case 'template':
        confirm({ title: '提示', content: <span>确认要将此组件保存为模板吗？<br/><span className='text-sm'>注意：保存为模板后如需修改，请再次发布，并删除旧的模板</span></span>, confirmationText: '确认', cancellationText: '取消' })
          .then(() => {
            const templateData = {
              component,
              attribute: attributeMap[component.id],
              api: apiMap[component.id] || {},
              event: eventMap[component.id] || []
            };
            html2canvas(document.getElementById(component.id) as HTMLElement, {
              useCORS: true
            }).then(canvas => {
              canvas.toBlob(blob => {
                if (blob) {
                  const file = new File([blob], 'cover', {
                    type: 'image/png'
                  });
                  uploadFiles([file])
                    .then(res => {
                      if (res?.isOk) {
                        const { data } = res;
                        const [coverImageId] = data as string[];
                        savaComponentTemplate({ name: attributeMap[component.id].name, cover: `${Domain.baseURL}/${coverImageId}.png`, templateStr: JSON.stringify(templateData) }).then(({ isOk, msg }) => {
                          if (isOk) {
                            enqueueSnackbar(`保存模板成功`, {
                              variant: 'success'
                            });
                          } else {
                            enqueueSnackbar(`保存模板失败：${msg}`, {
                              variant: 'warning'
                            });
                          }
                        })
                        .catch(error => {
                          enqueueSnackbar(`保存模板失败：${Array.isArray(error?.error) ? error?.error.shift() : error.msg}`, {
                            variant: 'error'
                          });
                        });
                      } else {
                        enqueueSnackbar(`生成封面图失败：${res?.msg}`, {
                          variant: 'error'
                        });
                      }
                    })
                    .catch(e => {
                      enqueueSnackbar(`生成封面图失败: 上传异常`, {
                        variant: 'error'
                      });
                    });
                } else {
                  enqueueSnackbar(`生成封面图失败: 工具异常`, {
                    variant: 'error'
                  });
                }
              }, 'image/png');
            })
            .catch(error => {
              enqueueSnackbar(`生成封面图失败: 工具异常`, {
                variant: 'error'
              });
            });
          })
          .catch(() => {});
        break;
      case 'copy':
        dispatch(pasteComponent(component.id));
        break;
      default:
        break;
    }
  }
  const listChild = layoutConfig.map(component => {
    const attrItem = attributeMap[component.id] || {};

    const isSelect = selectIds.length === 1 && selectIds.indexOf(component.id) > -1;
    return (
      <TreeItem key={component.id} {...{ component, attrItem, isSelect, handleEvents, handleListItemClick }}/>
    );
  });
  return (
    <div className='component-tree mt-1'>
      {
        listChild.length === 0 ? <EmptyContainer text='还没有添加组件~' /> : <List className='p-0 pl-2 pr-1 hideScroll'>
          {
            listChild
          }
        </List>
      }

    </div>
  );
}