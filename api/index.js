export default function handler(req, res) {
  // 从请求头中获取真实 IP
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // 返回 JSON 格式的 IP
  res.status(200).json({ ip: ip });
}
