/** @type {import('next').NextConfig} */
const nextConfig = {

        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'i.imgflip.com',
                }, {
                    protocol: 'https',
                    hostname: 'imgflip.com',
                },{
                    protocol: 'https',
                    hostname: 'thijsporck.com',
                },{
                    protocol: 'https',
                    hostname: 'i.ytimg.com',
                },{
                    protocol: 'https',
                    hostname: 'www.kapwing.com',
                },{
                    protocol: 'https',
                    hostname: 'media.licdn.com',
                },
                
    
            ]
        }
    };

export default nextConfig;
