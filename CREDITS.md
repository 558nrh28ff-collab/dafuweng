# 素材来源

游戏里的 3D 模型都来自 Kay Lousberg 的 **KayKit** 素材包，以 **CC0 1.0（公共领域）** 协议发布：可以免费用于个人和商业项目，可以修改，不要求署名。这里还是注明出处以示感谢。

| 用途 | 素材包 | 用到的模型 |
|---|---|---|
| 四个角色（团子 / 阿福 / 米露 / 豆豆）和动画 | [KayKit Character Pack: Adventures 1.0](https://github.com/KayKit-Game-Assets/KayKit-Character-Pack-Adventures-1.0) | Rogue、Barbarian、Mage、Knight；Idle、Jump_Idle、Cheer、Hit_A、Sit_Floor_Idle、Death_A、Spellcast_Shoot、PickUp 八段动画 |
| 四个动物角色（影子 / 阿雪 / 糖糖 / 金金）的身体 | 同上，衣服的贴图色块换了颜色（`scripts/build-models.mjs`）；头、耳朵、五官、尾巴和道具是本项目自己用 Blender 脚本（`blender/characters.py`）做的 | Rogue、Barbarian、Mage、Knight |
| 1～3 级房子（蓝 / 红 / 黄 / 绿四色）、道具屋、许愿池 | [KayKit Medieval Hexagon Pack 1.0](https://github.com/KayKit-Game-Assets/KayKit-Medieval-Hexagon-Pack-1.0) | building_home_A、building_home_B、building_castle、building_market、building_well |
| 树 | 同上 | tree_single_A（松树）、tree_single_B（冷杉） |

- 作者主页：<https://www.kaylousberg.com>
- 素材包里的协议原文：`LICENSE.txt`（CC0 1.0，<http://creativecommons.org/publicdomain/zero/1.0/>）
- 转换方式见 `scripts/build-models.mjs`：去掉武器和用不到的动画，合并成几个 GLB，做 meshopt 压缩。转换后的文件在 `src/assets/models/`。

游戏里的动画道具（起点旗子、金币、宝箱、施工吊车、热气球，`src/assets/models/anim-props.glb`）和四个动物角色的头部、尾巴、道具是本项目自己用 Blender 脚本（`blender/props.py`、`blender/characters.py`）做的，不含第三方素材。“海上小岛”地图的地形、水深图、地表图（`src/assets/models/sea-island-*.glb`、`src/assets/sea/`）和岛上所有道具（`sea-props.glb`：椰子树、灯塔、码头、小屋、船、海鸥、热带鱼、海龟、珊瑚……）也是本项目自己用 Blender 脚本（`blender/island.py`、`blender/island_props.py`）做的；海面、天空、水底焦散是自己写的着色器。开场动画和事件特写视频（`src/assets/video/`）由 `blender/intro.py`、`blender/events.py` 渲染，画面里用到的角色和房子是上面的 KayKit 模型（CC0），标题字是 ZCOOL KuaiLe（OFL，允许用在图片和视频里）。Blender 本身是 GPL 软件，但用它做出来的模型和视频不受 GPL 约束，和项目其它代码一样使用。

字体：[Fredoka](https://fonts.google.com/specimen/Fredoka)、[ZCOOL KuaiLe](https://fonts.google.com/specimen/ZCOOL+KuaiLe)，SIL Open Font License 1.1，通过 `@fontsource` 打包。
