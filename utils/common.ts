function genRandomStr() {
  const baseNumber = 0x10000;
  return Math.floor((1 + Math.random()) * baseNumber)
    .toString(16)
    .substring(1);
}
/**
 *  获取随机ID，组件拖到预览视图后就会被设置个ID
 */
export function getUid() {
  return `${genRandomStr()}-${genRandomStr()}-${genRandomStr()}`;
}