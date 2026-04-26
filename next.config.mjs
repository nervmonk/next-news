import { networkInterfaces } from 'os';
/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: Object.values(networkInterfaces())
        .flat()
        .filter((details) => details.family === 'IPv4' && !details.internal)
        .map((details) => details.address),
};
export default nextConfig;