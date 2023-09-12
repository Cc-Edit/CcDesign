import Editor from '@monaco-editor/react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Table, TableHead, TableRow, TableBody, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useThemeSwitch from '@/components/Design/hook/useThemeSwitch';

const options = {
  acceptSuggestionOnCommitCharacter: false, // 代码建议
  acceptSuggestionOnEnter: 'off' as 'off', // 回车代码建议
  accessibilitySupport: 'off' as 'off', // 辅助功能支持
  autoDetectHighContrast: false, // 自动高对比度显示
  automaticLayout: true, // 自动调整
  autoClosingBrackets: 'always' as 'always', // 自动闭合
  codeLens: false, // 右侧代码
  contextmenu: false, // 上下文菜单
  copyWithSyntaxHighlighting: false, // 复制语法高亮
  emptySelectionClipboard: false, // 空白复制
  folding: true, // 显示折叠
  foldingStrategy: 'indentation' as 'indentation', // 折叠方式
  formatOnPaste: true, // 粘贴时格式化
  inlayHints: { // 内联提示
    enabled: 'off' as 'off'
  },
  lightbulb: { // 灯泡提示
    enabled: false
  },
  lineNumbersMinChars: 1, // 行号预留空间
  fontSize: 12, // 字体大小
  glyphMargin: false, // 图示间距
  links: false, // 自动处理link
  minimap: { // 小地图
    enabled: false
  },
  multiCursorMergeOverlapping: false, // 合并重叠选项
  showFoldingControls: 'always' as 'always', // 是否一直显示折叠
  occurrencesHighlight: false, // 语法高亮
  parameterHints: { // 参数提示
    enabled: false
  },
  quickSuggestions: false, // 快速建议
  renderControlCharacters: false, // 控制字符呈现
  renderValidationDecorations: 'on' as 'on', // 语法检查
  screenReaderAnnounceInlineSuggestion: false, // 内联建议
  scrollBeyondLastColumn: 5, // 滚动超出列数
  scrollBeyondLastLine: false, // 滚动后显示一屏幕距离
  showDeprecated: false, // 删除变量建议
  snippetSuggestions: 'none' as 'none', // 代码段建议
  suggest: { // 建议选项
    filterGraceful: false,
    shareSuggestSelections: false,
    snippetsPreventQuickSuggestions: false,
    showReferences: false,
    preview: false
  },
  scrollbar: {
    verticalScrollbarSize: 6,
    horizontalScrollbarSize: 6
  }, // 滚动条
  suggestOnTriggerCharacters: false,
  tabCompletion: 'off' as 'off',
  tabSize: 2, // 缩进长度
  disableLayerHinting: true, // 样式优化
  overviewRulerBorder: true, // 滚动条的边框
  colorDecorators: false, // 颜色装饰器
  wordWrap: 'off' as 'off', // 换行
  horizontalScrollbarHeight: 1,
  verticalScrollbarWidth: 1
};
// json 格式化
function formatJSON(val = '') {
  try {
    const res = JSON.parse(val);
    return JSON.stringify(res, null, 2);
  } catch {
    const errorJson = {
      error: `非法返回${val}`
    };
    return JSON.stringify(errorJson, null, 2);
  }
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#e5e5e5' : '#262626',
    color: theme.palette.mode === 'light' ? '#27272a' : '#e4e4e7',
    fontSize: 13
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.mode === 'light' ? '#d4d4d4' : '#525252'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));
const defaultData = [{ date: 'Mon', value: 200 }, { date: 'Tue', value: 100 }, { date: 'Wed', value: 400 }, { date: 'Thu', value: 800 }, { date: 'Fri', value: 180 }, { date: 'Sat', value: 290 }, { date: 'Sun', value: 200 }];

interface EditorProps {
  [key: string]: any,
  onChange: Function
}
export default function MonacoEditor(props: EditorProps) {
  const { className = 'w-18', value = {}, onChange, hasMapping = true } = props;
  const { data = defaultData, mapping = {}} = value;
  const { theme } = useThemeSwitch();
  const editTheme = theme === 'dark' ? 'vs-dark' : 'vs';
  const [originData, setOriginData] = useState(data);
  const [originMapping, setOriginMapping] = useState(mapping);
  function handleEditorChange(eValue: string | undefined, ev: any) {
    try {
      const formatVal = eValue?.replace(/\s*/g, '') || '';
      setOriginData(JSON.parse(formatVal));
    } catch (e) { /* empty */ }
  }
  function handleSelectChange(event: SelectChangeEvent, key: string) {
    const eValue = event.target.value;
    if (eValue === '') {
      const newMapping = { ...originMapping } as Record<string, any>;
      delete newMapping[key];
      setOriginMapping({
        ...newMapping
      });
    } else {
      setOriginMapping({
        ...originMapping,
        [key]: eValue
      });
    }
  }
  useEffect(() => {
    onChange?.({
      ...value,
      data: originData,
      mapping: originMapping
    });
  }, [originData, originMapping]);
  useEffect(() => {
    const [dataItem = {}] = originData;
    const newMapping = { ...originMapping } as Record<string, any>;
    let hasChange = false;
    Object.keys(newMapping).forEach(key => {
      if (!(key in dataItem)) {
        delete newMapping[key];
        hasChange = true;
      }
    });
    hasChange && setOriginMapping(newMapping);
  }, [originData]);
  const [dataItem = {}] = originData;
  const tableRowEle = Object.keys(dataItem).map(key => {
    return (<StyledTableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
      <StyledTableCell align='left'>{ key }</StyledTableCell>
      <StyledTableCell align='center' >
        <Select value={originMapping[key] || ''} onChange={(event: SelectChangeEvent) => { handleSelectChange(event, key); }}>
          <MenuItem value=''>不关联</MenuItem>
          <MenuItem value='x-b'>X轴</MenuItem>
          {/* <MenuItem value='x-t'>X轴顶部</MenuItem>*/}
          <MenuItem value='y-l'>Y轴</MenuItem>
          {/* <MenuItem value='y-r'>Y轴右侧</MenuItem>*/}
        </Select>
      </StyledTableCell>
    </StyledTableRow>);
  });
  return (
    <div className={`dark:bg-neutral-900 bg-neutral-50 leading-8 pl-2 pr-2 border-0 border-solid dark:border-zinc-500 border-zinc-300 align-middle ${className}`}>
      <div className='w-full'>
        <span className='w-full leading-8 text-sm border-left ml-2 overflow-hidden'>静态数据</span>
        <div className='border border-solid dark:border-neutral-800 border-neutral-200 rounded-md overflow-hidden'>
          <Editor
            height='50vh'
            width='100%'
            defaultLanguage='json'
            options={options}
            theme={editTheme}
            defaultValue={formatJSON(JSON.stringify(originData))}
            onChange={handleEditorChange}
          />
        </div>
      </div>
      {
        hasMapping && <div className='w-full mt-2'>
          <span className='w-full leading-8 text-sm border-left ml-2 overflow-hidden'>数据关联</span>
          <div className='border border-solid dark:border-neutral-800 border-neutral-200 rounded-md overflow-hidden'>
            <Table stickyHeader size='small' className='monacotable' >
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align='center'>字段</StyledTableCell>
                  <StyledTableCell align='center'>绑定</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {
                  tableRowEle
                }
              </TableBody>
            </Table>
            {
              originData.length === 0 && <div className=' text-center text-xs m-4'>静态数据未获取到</div>
            }
          </div>
        </div>
      }
    </div>
  );
}