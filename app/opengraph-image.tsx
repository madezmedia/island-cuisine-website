import { ImageResponse } from 'next/og';
import { join } from 'path';
import { readFile } from 'fs/promises';

export const runtime = 'nodejs'; // Use Node.js runtime for file access

export const alt = 'Island Cuisine - Authentic Caribbean Restaurant';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // Read the logo file
    const logoData = await readFile(join(process.cwd(), 'public/images/logo-raw.jpg'));
    const logoSrc = `data:image/jpeg;base64,${logoData.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #1A3A3A, #0f2323)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'serif',
                    position: 'relative',
                }}
            >
                {/* Background Pattern/Texture overlay could go here if we had one */}

                <div style={{
                    display: 'flex',
                    borderRadius: '100%',
                    overflow: 'hidden',
                    border: '8px solid rgba(232, 122, 93, 0.3)',
                    boxShadow: '0 0 40px rgba(0,0,0,0.5)',
                    marginBottom: 30,
                    width: 250,
                    height: 250,
                }}>
                    <img
                        src={logoSrc}
                        width="250"
                        height="250"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 70,
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: 10,
                        textShadow: '0 4px 10px rgba(0,0,0,0.4)',
                    }}
                >
                    Island <span style={{ color: '#E87A5D', marginLeft: 10 }}>Cuisine</span>
                </div>

                <div
                    style={{
                        fontSize: 32,
                        color: '#E0E0E0',
                        textAlign: 'center',
                        maxWidth: '80%',
                        textShadow: '0 2px 5px rgba(0,0,0,0.4)',
                    }}
                >
                    Authentic Caribbean Restaurant in Charlotte, NC
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
