/*
 * @Author: WGF
 * @Date: 2023-12-26 10:26:37
 * @LastEditors: WGF
 * @LastEditTime: 2023-12-27 15:38:07
 * @Description:
 * @FilePath: /react-lowcode-simple/src/pages/EditPages/RightSider/index.tsx
 */
import { useState } from "react";
import useEditStore from "src/store/editStore";
import EditCmp from "./EditCmp";
import EditCanvas from "./EditCanvas";
import EditMultiCmps from "./EditMultiCmps";
import styles from "./index.module.less";
import { isGroupComponent } from "src/utils/const";

// 画布
// 单个组件
// 多个组件
export default function RightSider() {

  const [canvas, assembly] = useEditStore((state) => [
    state.canvas,
    state.assembly,
  ]);

  const assemblySize = assembly.size;
  let selectedCmp;
  let isGroup = false;
  if (assemblySize === 1) {
    selectedCmp = canvas.content.cmps[Array.from(assembly)[0]];
    isGroup = !!(selectedCmp.type & isGroupComponent);
  }

  return (
    <div className={styles.main}>
      {assemblySize === 0 ? (
        <EditCanvas canvas={canvas} />
      ) : assemblySize === 1 && !isGroup ? (
        <EditCmp
          selectedCmp={selectedCmp!}
          formKeys={canvas.content.formKeys}
        />
      ) : (
        <EditMultiCmps isGroup={isGroup} />
      )}
    </div>
  );
}
