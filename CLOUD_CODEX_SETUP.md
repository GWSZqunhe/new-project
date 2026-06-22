# Cloud Codex 设置

这个项目已经补好了仓库内的 `AGENTS.md`，Cloud Codex 进入仓库后会自动读取这些规则。

## 当前状态

- 本机 `codex` 已安装。
- 当前已经使用 ChatGPT 登录，本地认证可用。
- GitHub 仓库已就绪：`https://github.com/GWSZqunhe/new-project`
- 默认分支：`main`

## 还差的步骤

1. 打开 [Codex Web](https://chatgpt.com/codex)。
2. 确认 GitHub 账号已连接。
3. 在 Codex 里选择 `GWSZqunhe/new-project`。
4. 在环境设置里按项目需要补 setup script。
5. 用下方首次测试任务验证 Cloud Codex 能读取仓库规则。

## 推荐的环境设置

如果这个项目后面要继续跑 Node 相关任务，setup script 可以先用这一版：

```bash
if [ -f package.json ]; then
  npm install
fi
```

如果后面只是文档整理、PPT 产出或轻量改稿，可以先不写 setup script，等真正需要依赖安装时再加。

## 重要说明

- Cloud Codex 需要 GitHub 云端仓库，只有本地 Git 仓库还不够。
- 当前仓库已经推到 GitHub，Cloud Codex 可以直接选择该仓库。
- Cloud Codex 需要 ChatGPT 登录，不是单靠 API key。
- setup script 阶段默认可联网，agent 正式执行阶段默认不开公网访问。
- Secrets 只在 setup script 阶段可用，不会保留到 agent 执行阶段。

## 建议的首次测试任务

在 Codex Web 里对这个仓库先发一个很小的任务：

```text
先阅读仓库根目录的 AGENTS.md，然后总结这个项目的工作规则，不要修改任何文件。
```

如果它能正确复述规则，就说明这个仓库已经适合拿来跑 Cloud Codex 任务了。
