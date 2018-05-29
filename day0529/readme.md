[openssl教程](https://www.jianshu.com/p/253c57e8c08e)

## 生成服务端私钥
```
openssl genrsa -out server.key 1024
```

## 生成服务端公钥
```
openssl rsa -in server.key -pubout -out server.pem
```

## 生成客户端私钥
```
openssl genrsa -out client.key 1024
```

## 生成客户端公钥
```
openssl rsa -in client.key -pubout -out client.pem
```

## 通过私钥自签名生成证书
```
// 生成私钥
openssl genrsa -out ca.key 1024
// 生成CSR文件
openssl req -new -key ca.key -out ca.csr
// 生成证书
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```