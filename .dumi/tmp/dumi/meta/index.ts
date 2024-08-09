// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { demos as dm0, frontmatter as fm0, toc as toc0, texts as txt0 } from '/Users/jxd/Desktop/前端项目/前端项目/react-window-table/docs/component/ReactWindowStickyCells.md?type=meta';
import { demos as dm1, frontmatter as fm1, toc as toc1, texts as txt1 } from '/Users/jxd/Desktop/前端项目/前端项目/react-window-table/docs/component/PopoverDialog.md?type=meta';
import { demos as dm2, frontmatter as fm2, toc as toc2, texts as txt2 } from '/Users/jxd/Desktop/前端项目/前端项目/react-window-table/docs/component/Relation.md?type=meta';
import { demos as dm3, frontmatter as fm3, toc as toc3, texts as txt3 } from '/Users/jxd/Desktop/前端项目/前端项目/react-window-table/docs/index.md?type=meta';

export { components } from './atoms';
export { tabs } from './tabs';

export const filesMeta = {
  'docs/component/ReactWindowStickyCells': {
    frontmatter: fm0,
    toc: toc0,
    texts: txt0,
    demos: dm0,
  },
  'docs/component/PopoverDialog': {
    frontmatter: fm1,
    toc: toc1,
    texts: txt1,
    demos: dm1,
  },
  'docs/component/Relation': {
    frontmatter: fm2,
    toc: toc2,
    texts: txt2,
    demos: dm2,
  },
  'docs/index': {
    frontmatter: fm3,
    toc: toc3,
    texts: txt3,
    demos: dm3,
  },
}

// generate demos data in runtime, for reuse route.id to reduce bundle size
export const demos = Object.entries(filesMeta).reduce((acc, [id, meta]) => {
  // append route id to demo
  Object.values(meta.demos).forEach((demo) => {
    demo.routeId = id;
  });
  // merge demos
  Object.assign(acc, meta.demos);

  // remove demos from meta, to avoid deep clone demos in umi routes/children compatible logic
  delete meta.demos;

  return acc;
}, {});
