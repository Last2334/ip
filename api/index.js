export default function handler(req, res) {
  // 从请求头中获取真实 IP
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // 只需要接口，返回纯文本 IP
  // 如果需要 JSON 格式，可以改为: res.status(200).json({ ip: ip });
  res.status(200).send(ip);
}
