# 获取客户端 IP 接口 (Get Client IP API)

这是一个运行在 Vercel 上的极简 API 服务，用于获取访问者的公网 IP 地址。

**特点：**
- ✅ **纯净接口**：只返回 IP 地址，无 HTML 标签。
- ✅ **无第三方依赖**：直接从服务端请求头获取 IP，不依赖 ipify 等外部服务。
- ✅ **免费部署**：使用 Vercel 免费额度即可。

## 部署步骤

由于 GitHub Pages 是纯静态托管，无法直接读取请求头中的 IP 信息，因此我们需要使用 Vercel（支持 Serverless 函数）。

1. **上传到 GitHub**
   - 将本项目推送到您的 GitHub 仓库。

2. **在 Vercel 上导入**
   - 访问 [vercel.com](https://vercel.com) 并注册/登录。
   - 点击 "Add New..." -> "Project"。
   - 选择 "Import" 您刚才创建的 GitHub 仓库。
   - 保持默认设置，点击 "Deploy"。

## 使用方法

部署成功后，Vercel 会分配一个域名（例如 `your-project.vercel.app`）。

### 获取 IP
访问：
```
https://your-project.vercel.app/api
```

**返回示例：**
```text
203.0.113.1
```

## 技术原理
代码位于 `api/index.js`。Vercel 会自动将 `api` 目录下的文件识别为 Serverless 函数。
我们通过读取 HTTP 请求头中的 `x-forwarded-for` 字段来获取用户的真实 IP。
