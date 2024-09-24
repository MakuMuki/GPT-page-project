# GPT-Project

## 项目简介

GPT-Project 是一个基于 React + TypeScript + Vite 构建的前端项目，旨在展示 GPT 技术的多种应用场景，项目采用组件化开发，界面现代，交互友好，适合 AI 产品展示和二次开发。

## 技术要点

- **前端框架**：React 19
- **开发语言**：TypeScript 5
- **构建工具**：Vite 7
- **样式方案**：CSS Modules，响应式设计
- **代码规范**：ESLint + TypeScript ESLint
- **依赖管理**：pnpm
- **图标库**：react-icons

## 目录结构

```
├── public/                # 静态资源
├── src/
│   ├── assets/            # 图片等静态资源
│   ├── components/        # 通用组件（如 Navbar、Feature、Article）
│   ├── containers/        # 页面级模块（如 Header、Features、Blog）
│   ├── App.tsx            # 应用主入口
│   ├── main.tsx           # 渲染入口
│   └── index.css          # 全局样式
├── package.json           # 项目依赖与脚本
├── tsconfig*.json         # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── README.md              # 项目说明
```

## 启动方式

1. 安装依赖（请确保已安装 pnpm）：

   ```bash
   pnpm install
   ```

2. 启动开发环境：

   ```bash
   pnpm dev
   ```

3. 生产环境打包：

   ```bash
   pnpm build
   ```

4. 预览生产环境：
   ```bash
   pnpm preview
   ```

## 其他说明

- 本项目仅为前端演示，未集成后端服务与真实 GPT API。
- 代码风格统一，建议配合 VSCode + ESLint 插件开发。
- 欢迎二次开发与定制。
