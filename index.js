#!/usr/bin/env node

const args = process.argv.slice(2);

// --help 参数交互
if (args.includes("--help") || args.includes("-h")) {
  console.log("ebpro v1.0.0 - 测试CLI工具");
  console.log("");
  console.log("用法:");
  console.log("  ebpro               运行默认测试输出");
  console.log("  ebpro --help, -h    显示本帮助信息");
  console.log("  ebpro --version     显示版本号");
  console.log("  ebpro [参数...]     透传参数并回显");
  process.exit(0);
}

if (args.includes("--version") || args.includes("-v")) {
  console.log("ebpro v1.0.0");
  process.exit(0);
}

console.log("✅ ebpro 测试CLI运行成功！");
console.log("📌 你是通过 npx github:xxx/ebpro 启动的");
console.log("📅 测试包：ebpro v1.0.0");

// 读取传入参数
if (args.length > 0) {
  console.log("🔍 收到参数：", args);
}
