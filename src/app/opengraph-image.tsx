import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SuperChat per Odoo 18 — CRM Automation & Messaggistica Multi-Canale';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const fontData = await fetch(
    'https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#00031C',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Poppins',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, rgba(55, 60, 195, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top accent bar gradient */}
        <div
          style={{
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #4F60FA 0%, #373CC3 100%)',
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            padding: '40px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Top section with logo */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-1px',
              }}
            >
              SuperChat
            </span>
          </div>

          {/* Center section with main headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flex: 1,
            }}
          >
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                textAlign: 'center',
                maxWidth: '800px',
                lineHeight: '1.2',
                letterSpacing: '-1px',
              }}
            >
              Dal Lead alla Vendita, Tutto Automatico
            </h1>
            <p
              style={{
                fontSize: '24px',
                color: '#73799B',
                margin: 0,
                textAlign: 'center',
                fontWeight: 500,
              }}
            >
              CRM Automation & Messaggistica Multi-Canale per Odoo 18
            </p>
          </div>

          {/* Bottom section with branding */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#4F60FA',
                letterSpacing: '0.5px',
              }}
            >
              persevida.cz
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
