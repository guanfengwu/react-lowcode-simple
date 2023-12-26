/*
 * @Author: WGF
 * @Date: 2023-12-26 10:26:36
 * @LastEditors: WGF
 * @LastEditTime: 2023-12-26 15:25:14
 * @Description: 
 * @FilePath: /react-lowcode-simple/src/pages/EditPages/Center/Cmp/index.tsx
 */
import {ICmpWithKey} from "src/store/editStoreTypes";
import styles from "./index.module.less";
import {Button, Img, Input, Text} from "./CmpDetail";
import classNames from "classnames";
import {omit, pick} from "lodash";
import {
  getCmpGroupIndex,
  setCmpSelected,
  setCmpsSelected,
} from "src/store/editStore";
import {memo} from "react";
import {
  isImgComponent,
  isTextComponent,
  isFormComponent_Button,
  isFormComponent_Input,
} from "src/utils/const";

interface ICmpProps {
  cmp: ICmpWithKey;
  index: number;
  isSelected: boolean;
}

const Cmp = memo((props: ICmpProps) => {
  const {cmp, index, isSelected} = props;
  const {style} = cmp;

  const setSelected = (e: any) => {
    console.log('e.metaKey',e.metaKey);
    
    e.stopPropagation();
    if (e.metaKey) {
      setCmpsSelected([index]);
    } else {
      // 如果这个组件属于组合组件，那么默认选中组合组件
      const groupIndex = getCmpGroupIndex(index);
      setCmpSelected(groupIndex != undefined ? groupIndex : index);
    }
  };

  const outerStyle = pick(style, [
    "position",
    "top",
    "left",
    "width",
    "height",
  ]);

  const innerStyle = omit(style, "position", "top", "left");
  const transform = `rotate(${style.transform}deg)`;

  console.log("cmp render"); //sy-log

  return (
    <div
      className={classNames(styles.main, isSelected && "selectedBorder")}
      style={{
        ...outerStyle,
        transform,
        zIndex: index,
      }}
      onClick={setSelected}
      id={"cmp" + cmp.key}>
      <div className={styles.inner} style={{...innerStyle}}>
        {cmp.type === isTextComponent && <Text value={cmp.value} />}
        {cmp.type === isImgComponent && <Img value={cmp.value} />}
        {cmp.type === isFormComponent_Input && <Input {...cmp} />}
        {cmp.type === isFormComponent_Button && <Button value={cmp.value} />}
      </div>
    </div>
  );
});

export default Cmp;
