import React from 'react';
import Image from 'next/image';
import { MessageCircle, Instagram, Facebook, Mail, MessageSquare, Send } from 'lucide-react';

const cardBase = "bg-[#06051E] border border-[rgba(79,96,250,0.12)] rounded-2xl overflow-hidden relative";
const flexCenter = "flex items-center justify-center";

export const InboxMockup = () => {
  return (
    <div className={`${cardBase} w-full max-w-[1000px] aspect-[16/9] flex flex-col shadow-2xl shadow-[#4F60FA]/10`}>
      <div className="h-12 border-b border-[rgba(79,96,250,0.12)] flex items-center px-4 gap-3 bg-[#050A29]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="h-6 w-64 bg-[#1D217B]/30 rounded-md" />
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 border-r border-[rgba(79,96,250,0.12)] bg-[#050A29] hidden md:flex flex-col">
          <div className="p-4 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${i === 2 ? 'bg-[#1D217B]/30' : ''}`}>
                <div className={`w-10 h-10 rounded-full ${i === 2 ? 'bg-[#4F60FA]' : 'bg-[#1D217B]'}`} />
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-20 bg-[#73799B]/20 rounded" />
                  <div className="h-2 w-12 bg-[#73799B]/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-[#00031C] relative">
          <div className="flex-1 p-6 space-y-6 overflow-hidden">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#73799B]/20 shrink-0" />
              <div className="bg-[#1D217B] p-3 rounded-2xl rounded-tl-none max-w-[70%] text-[#DBE3FF] text-sm">
                Ciao! Vorrei maggiori informazioni sull'integrazione Odoo.
              </div>
            </div>
            
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-[#4F60FA] shrink-0" />
              <div className="bg-[#4F60FA]/20 border border-[#4F60FA]/30 p-3 rounded-2xl rounded-tr-none max-w-[70%] text-white text-sm">
                Certamente! SuperChat permette di gestire tutti i canali direttamente da qui.
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#73799B]/20 shrink-0" />
              <div className="bg-[#1D217B] p-3 rounded-2xl rounded-tl-none max-w-[70%] text-[#DBE3FF] text-sm">
                Supporta anche WhatsApp e Instagram?
              </div>
            </div>

             <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-[#4F60FA] shrink-0" />
              <div className="bg-[#4F60FA]/20 border border-[#4F60FA]/30 p-3 rounded-2xl rounded-tr-none max-w-[70%] text-white text-sm">
                Sì, inclusi Telegram, Messenger e Email. Tutto sincronizzato in tempo reale.
              </div>
            </div>
          </div>

          <div className="h-16 border-t border-[rgba(79,96,250,0.12)] bg-[#050A29] flex items-center px-4 gap-4">
            <div className="w-8 h-8 rounded-full bg-[#73799B]/20" />
            <div className="flex-1 h-10 bg-[#00031C] rounded-full border border-[rgba(79,96,250,0.12)]" />
            <div className="w-10 h-10 rounded-full bg-[#4F60FA] flex items-center justify-center">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>

        <div className="w-64 border-l border-[rgba(79,96,250,0.12)] bg-[#050A29] hidden lg:flex flex-col p-6">
          <div className="w-20 h-20 rounded-full bg-[#1D217B] mx-auto mb-4" />
          <div className="h-4 w-32 bg-[#73799B]/20 rounded mx-auto mb-2" />
          <div className="h-3 w-24 bg-[#73799B]/10 rounded mx-auto mb-8" />
          
          <div className="space-y-4">
            <div className="h-10 w-full bg-[#1D217B]/20 rounded-lg" />
            <div className="h-10 w-full bg-[#1D217B]/20 rounded-lg" />
            <div className="h-10 w-full bg-[#1D217B]/20 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const featureChannels = [
  { icon: MessageCircle, color: '#25D366', label: 'WhatsApp' },
  { icon: Instagram, color: '#E1306C', label: 'Instagram' },
  { icon: Facebook, color: '#0084FF', label: 'Messenger' },
  { icon: Mail, color: '#EA4335', label: 'Email' },
  { icon: MessageSquare, color: '#F59E0B', label: 'SMS' },
  { icon: Send, color: '#0088CC', label: 'Telegram' },
];

export const FeatureMockup = ({ variant, className }: { variant: 'channels' | 'webhook' | 'automation'; className?: string }) => {
  return (
    <div className={`w-full ${flexCenter} ${className || ''}`}>
      {variant === 'channels' && (
        <div
          className="relative w-full overflow-hidden py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="flex w-max gap-12 animate-marquee">
            {[...featureChannels, ...featureChannels].map((ch, i) => {
              const Icon = ch.icon;
              return (
                <div
                  key={`${ch.label}-${i}`}
                  className="flex flex-col items-center gap-2.5 shrink-0"
                >
                  <div
                    className="w-16 h-16 rounded-2xl bg-[#00031C] border-2 flex items-center justify-center"
                    style={{
                      borderColor: `${ch.color}35`,
                      boxShadow: `0 0 20px ${ch.color}18`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: ch.color }} />
                  </div>
                  <span className="text-[11px] font-medium whitespace-nowrap" style={{ color: `${ch.color}BB` }}>
                    {ch.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {variant === 'webhook' && (
        <div className="w-full max-w-sm space-y-4 font-mono text-xs px-6">
          {[
            { endpoint: '/webhook/whatsapp', status: '200 OK', idx: 0 },
            { endpoint: '/webhook/telegram', status: '200 OK', idx: 1 },
            { endpoint: '/webhook/instagram', status: '200 OK', idx: 2 },
          ].map((wh) => (
            <div
              key={wh.endpoint}
              className={`webhook-row-${wh.idx} flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors`}
            >
              <div className="relative flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <div
                  className={`webhook-ring-${wh.idx} absolute w-2.5 h-2.5 rounded-full border border-[#28C840]`}
                />
              </div>
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[#28C840] font-semibold text-[11px]">POST</span>
                  <span className="text-[#DBE3FF] text-[11px] truncate">{wh.endpoint}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`webhook-cascade-${wh.idx} text-[#28C840] text-[10px] opacity-0`}>
                    {wh.status}
                  </span>
                </div>
              </div>
              <span className={`webhook-cascade-${wh.idx} text-[#28C840] font-bold text-sm opacity-0`}>
                2ms
              </span>
            </div>
          ))}
        </div>
      )}

      {variant === 'automation' && (
        <div className="flex items-center justify-center gap-0 px-4 py-6">
          <div className="auto-step-0 flex flex-col items-center gap-1.5 opacity-0">
            <div className="w-16 h-16 rounded-xl bg-[#4F60FA]/10 border-2 border-[#4F60FA]/30 flex items-center justify-center shadow-[0_0_20px_rgba(79,96,250,0.15)]">
              <span className="text-[#4F60FA] text-lg font-bold">CRM</span>
            </div>
            <span className="text-[10px] font-medium text-[#73799B]">Lead</span>
          </div>

          <div className="auto-line-0 w-10 h-0.5 opacity-0 bg-gradient-to-r from-[#4F60FA] to-[#25D366] mb-5" />

          <div className="auto-step-1 flex flex-col items-center gap-1.5 opacity-0">
            <div className="w-16 h-16 rounded-xl bg-[#25D366]/10 border-2 border-[#25D366]/30 flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.15)]">
              <MessageCircle className="w-7 h-7 text-[#25D366]" />
            </div>
            <span className="text-[10px] font-medium text-[#73799B]">WhatsApp</span>
          </div>

          <div className="auto-line-1 w-10 h-0.5 opacity-0 bg-gradient-to-r from-[#25D366] to-[#F59E0B] mb-5" />

          <div className="auto-step-2 flex flex-col items-center gap-1.5 opacity-0">
            <div className="w-16 h-16 rounded-xl bg-[#F59E0B]/10 border-2 border-[#F59E0B]/30 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <span className="text-[#F59E0B] text-lg font-bold">€</span>
            </div>
            <span className="text-[10px] font-medium text-[#73799B]">Preventivo</span>
          </div>

          <div className="auto-line-2 w-10 h-0.5 opacity-0 bg-gradient-to-r from-[#F59E0B] to-[#28C840] mb-5" />

          <div className="auto-step-3 flex flex-col items-center gap-1.5 opacity-0">
            <div className="w-16 h-16 rounded-xl bg-[#28C840]/10 border-2 border-[#28C840]/30 flex items-center justify-center shadow-[0_0_24px_rgba(40,200,64,0.2)]">
              <span className="text-[#28C840] text-2xl font-bold">✓</span>
            </div>
            <span className="text-[10px] font-medium text-[#28C840]">Inviato</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const ModuleMockup = ({ moduleIndex }: { moduleIndex: number }) => {
  const renderContent = () => {
    switch (moduleIndex) {
      case 0:
        return (
          <div className="flex flex-col gap-2 items-center">
            <div className="w-16 h-16 rounded-full border-4 border-[#4F60FA]/20 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#4F60FA] rounded-full" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#73799B]" />
              <div className="w-2 h-2 rounded-full bg-[#73799B]" />
              <div className="w-2 h-2 rounded-full bg-[#73799B]" />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="w-3/4 h-3/4 bg-[#00031C] rounded-lg border border-[rgba(79,96,250,0.12)] flex overflow-hidden">
            <div className="w-1/4 border-r border-[rgba(79,96,250,0.12)] bg-[#050A29]" />
            <div className="flex-1 p-2 space-y-2">
              <div className="h-2 w-1/2 bg-[#1D217B] rounded" />
              <div className="h-2 w-3/4 bg-[#1D217B]/50 rounded" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-32 h-20 bg-[#00031C] rounded-lg border border-[rgba(79,96,250,0.12)] p-2">
              <div className="h-2 w-full bg-[#1D217B]/20 rounded mb-2" />
              <div className="h-2 w-2/3 bg-[#1D217B]/20 rounded" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-white rounded-sm" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-2 w-3/4 h-1/2">
            <div className="flex-1 bg-[#1D217B]/20 rounded-lg flex flex-col gap-1 p-1">
              <div className="h-6 bg-[#4F60FA]/20 rounded" />
              <div className="h-6 bg-[#4F60FA]/20 rounded" />
            </div>
            <div className="flex-1 bg-[#1D217B]/10 rounded-lg p-1">
              <div className="h-6 bg-[#73799B]/20 rounded" />
            </div>
            <div className="flex-1 bg-[#1D217B]/10 rounded-lg p-1">
               <div className="h-6 bg-[#73799B]/20 rounded" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-24 h-32 bg-[#00031C] border border-[rgba(79,96,250,0.12)] rounded-lg p-3 relative">
            <div className="h-2 w-1/2 bg-[#73799B] rounded mb-2" />
            <div className="space-y-1">
              <div className="h-1 w-full bg-[#1D217B]/30 rounded" />
              <div className="h-1 w-full bg-[#1D217B]/30 rounded" />
              <div className="h-1 w-full bg-[#1D217B]/30 rounded" />
            </div>
            <div className="absolute bottom-3 right-3 w-8 h-8 bg-[#4F60FA] rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-4 gap-1 w-3/4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`w-full pt-[100%] rounded-sm ${[0, 2, 5, 6, 8, 11, 14, 15].includes(i) ? 'bg-[#4F60FA]/40' : 'bg-[#1D217B]/20'}`} />
            ))}
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#4F60FA]/20 border border-[#4F60FA] flex items-center justify-center text-[10px] text-white">START</div>
            <div className="h-4 w-0.5 bg-[#73799B]/30" />
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded bg-[#1D217B] border border-[rgba(79,96,250,0.3)]" />
              <div className="w-6 h-6 rounded bg-[#1D217B] border border-[rgba(79,96,250,0.3)]" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${cardBase} w-full aspect-video ${flexCenter} bg-[#06051E]`}>
      {renderContent()}
    </div>
  );
};

export const BenefitMockup = ({ variant }: { variant: 'crm' | 'quotes' | 'campaigns' | 'security' }) => {
  if (variant === 'security') {
    return (
      <div className="flex flex-col items-center mt-4 gap-5">
        <div className="relative flex items-center justify-center w-full h-48">
          <div className="sec-ring-3 absolute w-48 h-48 rounded-full" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'rgba(29,33,123,0.2)' }} />
          <div className="sec-ring-2 absolute w-32 h-32 rounded-full" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'rgba(29,33,123,0.2)' }} />
          <div className="sec-ring-1 absolute w-20 h-20 rounded-full" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'rgba(29,33,123,0.2)' }} />

          <div className="sec-lock absolute flex flex-col items-center">
            <div className="w-6 h-5 rounded-t-full" style={{ borderWidth: '2.5px', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.5)', borderBottom: 'none' }} />
            <div className="w-8 h-6 rounded-sm" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="sec-label-1 text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color: 'transparent', backgroundColor: 'transparent', borderWidth: '1px', borderStyle: 'solid', borderColor: 'transparent' }}>User</span>
          <span className="text-[#73799B]/30">→</span>
          <span className="sec-label-2 text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color: 'transparent', backgroundColor: 'transparent', borderWidth: '1px', borderStyle: 'solid', borderColor: 'transparent' }}>Assignator</span>
          <span className="text-[#73799B]/30">→</span>
          <span className="sec-label-3 text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color: 'transparent', backgroundColor: 'transparent', borderWidth: '1px', borderStyle: 'solid', borderColor: 'transparent' }}>Admin</span>
        </div>

        <span className="sec-secured text-xs font-bold tracking-widest" style={{ color: 'transparent' }}>SECURED</span>
      </div>
    );
  }

  return (
    <div className={`${cardBase} w-full ${variant === 'campaigns' ? 'h-56' : 'h-48'} mt-4 ${flexCenter} bg-[#050925]`}>
      {variant === 'crm' && (
        <div className="w-full px-8 flex gap-3 items-end h-32 pb-4">
          <div className="flex-1 flex flex-col items-center">
            <div className="crm-stage-1 w-full h-16 rounded-t-lg" />
            <span className="crm-label-1 mt-2 text-[10px] font-medium">Lead</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="crm-stage-2 w-full h-24 rounded-t-lg relative">
              <div className="crm-badge absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4F60FA] text-white text-[10px] px-2 py-0.5 rounded-full">
                Auto
              </div>
            </div>
            <span className="crm-label-2 mt-2 text-[10px] font-medium">Qualifica</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="crm-stage-3 w-full h-20 rounded-t-lg" />
            <span className="crm-label-3 mt-2 text-[10px] font-medium">Vinto</span>
          </div>
        </div>
      )}
      
      {variant === 'quotes' && (
        <div className="relative flex items-center justify-center gap-6 w-full h-full px-4">
          <div className="quote-icon-email flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-[#EA4335]/10 border border-[#EA4335]/30 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#EA4335]" />
            </div>
            <span className="quote-label-email text-[9px] font-medium text-[#73799B]/40">Email</span>
          </div>

          <div className="relative w-20 h-24">
            <div className="quote-doc-email absolute inset-0 bg-[#00031C] border border-[rgba(79,96,250,0.12)] rounded-lg p-3 shadow-xl">
              <div className="h-1.5 w-8 bg-[#4F60FA] rounded mb-2" />
              <div className="space-y-1.5">
                <div className="h-1 w-full bg-[#1D217B]/30 rounded" />
                <div className="h-1 w-3/4 bg-[#1D217B]/30 rounded" />
                <div className="h-1 w-full bg-[#1D217B]/30 rounded" />
              </div>
            </div>
            <div className="quote-doc-whatsapp absolute inset-0 bg-[#00031C] border border-[rgba(79,96,250,0.12)] rounded-lg p-3 shadow-xl">
              <div className="h-1.5 w-8 bg-[#4F60FA] rounded mb-2" />
              <div className="space-y-1.5">
                <div className="h-1 w-full bg-[#1D217B]/30 rounded" />
                <div className="h-1 w-3/4 bg-[#1D217B]/30 rounded" />
                <div className="h-1 w-full bg-[#1D217B]/30 rounded" />
              </div>
            </div>
          </div>

          <div className="quote-icon-whatsapp flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            <span className="quote-label-whatsapp text-[9px] font-medium text-[#73799B]/40">WhatsApp</span>
          </div>
        </div>
      )}

      {variant === 'campaigns' && (
        <div className="flex flex-col w-full max-w-sm mx-auto px-6 gap-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-medium text-[#73799B]">Invio in corso</span>
            <div className="relative h-4 overflow-hidden">
              {[0, 200, 400, 600, 800, 1000].map((n, i) => (
                <span
                  key={n}
                  className="campaign-counter absolute right-0 text-[11px] font-bold tabular-nums"
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  <span className="text-[#4F60FA]">{n.toLocaleString()}</span>
                  <span className="text-[#73799B]">/1.000</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {[
              { width: 'w-28', color: '#4F60FA', delay: 0 },
              { width: 'w-36', color: '#25D366', delay: 1 },
              { width: 'w-20', color: '#0088CC', delay: 2 },
              { width: 'w-32', color: '#E1306C', delay: 3 },
              { width: 'w-24', color: '#F59E0B', delay: 4 },
            ].map((msg, i) => (
              <div
                key={i}
                className="campaign-msg flex items-center gap-2.5"
                style={{ animationDelay: `${msg.delay * 0.7}s` }}
              >
                <div
                  className="w-6 h-6 rounded-full shrink-0"
                  style={{ backgroundColor: `${msg.color}30`, border: `1.5px solid ${msg.color}50` }}
                />
                <div className={`${msg.width} flex items-center justify-between gap-2 rounded-lg rounded-tr-none border border-[#4F60FA]/20 bg-[#4F60FA]/10 px-3 py-2`}>
                  <div className="h-1.5 flex-1 rounded bg-[#4F60FA]/40" />
                  <span
                    className="campaign-check text-[10px] text-[#25D366]"
                    style={{ animationDelay: `${msg.delay * 0.7 + 0.4}s` }}
                  >✓✓</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-1">
            <div className="h-1.5 w-full rounded-full bg-[#1D217B]/20 overflow-hidden">
              <div className="campaign-progress h-full rounded-full bg-gradient-to-r from-[#4F60FA] to-[#25D366]" />
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export const StepMockup = ({ step }: { step: number }) => {
  return (
    <div className={`${cardBase} w-full h-full min-h-[300px] ${flexCenter} bg-[#06051E]`}>
      {step === 1 && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-[#1D217B]/20 rounded-2xl border-2 border-dashed border-[#4F60FA]/40 flex items-center justify-center">
            <div className="w-12 h-12 bg-[#4F60FA] rounded-lg shadow-[0_0_30px_rgba(79,96,250,0.4)]" />
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4F60FA]" />
            <div className="w-2 h-2 rounded-full bg-[#1D217B]" />
            <div className="w-2 h-2 rounded-full bg-[#1D217B]" />
          </div>
          <div className="text-[#73799B] text-sm font-mono mt-2">npm install superchat_base</div>
        </div>
      )}

      {step === 2 && (
        <div className="w-3/4 bg-[#050A29] rounded-xl border border-[rgba(79,96,250,0.12)] p-4 space-y-4">
          <div className="flex justify-between items-center border-b border-[rgba(79,96,250,0.12)] pb-2">
            <div className="h-3 w-20 bg-[#73799B]/30 rounded" />
            <div className="w-8 h-4 bg-[#4F60FA] rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-8 w-full bg-[#00031C] rounded border border-[rgba(79,96,250,0.12)]" />
            <div className="h-8 w-full bg-[#00031C] rounded border border-[rgba(79,96,250,0.12)]" />
          </div>
          <div className="w-full h-8 bg-[#4F60FA] rounded flex items-center justify-center text-white text-xs font-bold">
            CONNECT
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="w-3/4 h-3/4 bg-[#050A29] rounded-xl border border-[rgba(79,96,250,0.12)] flex flex-col overflow-hidden">
          <div className="h-10 bg-[#1D217B]/20 border-b border-[rgba(79,96,250,0.12)] flex items-center px-3 gap-2">
            <div className="w-6 h-6 rounded-full bg-[#4F60FA]" />
            <div className="h-2 w-20 bg-[#73799B]/30 rounded" />
          </div>
          <div className="flex-1 p-3 space-y-3">
            <div className="bg-[#1D217B]/20 p-2 rounded-lg rounded-tl-none w-2/3">
              <div className="h-2 w-full bg-[#73799B]/20 rounded" />
            </div>
            <div className="bg-[#4F60FA]/20 p-2 rounded-lg rounded-tr-none w-2/3 ml-auto border border-[#4F60FA]/20">
              <div className="h-2 w-full bg-[#DBE3FF]/40 rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const channels = [
  { deg: 0, icon: MessageCircle, color: '#25D366', label: 'WhatsApp' },
  { deg: 60, icon: Instagram, color: '#E1306C', label: 'Instagram' },
  { deg: 120, icon: Facebook, color: '#0084FF', label: 'Messenger' },
  { deg: 180, icon: Mail, color: '#EA4335', label: 'Email' },
  { deg: 240, icon: MessageSquare, color: '#F59E0B', label: 'SMS' },
  { deg: 300, icon: Send, color: '#0088CC', label: 'Telegram' },
];

export const EcosystemMockup = () => {
  return (
    <div className="relative w-full max-w-[700px] aspect-square md:aspect-[16/9] flex items-center justify-center">
      <div className="relative z-10 w-32 h-32 bg-[#06051E] rounded-full border-2 border-[#4F60FA] shadow-[0_0_50px_rgba(79,96,250,0.3)] flex items-center justify-center">
        <Image
          src="/icons/superchat-logo.png"
          alt="SuperChat"
          width={72}
          height={72}
          priority
        />
      </div>

      {channels.map((ch) => {
        const Icon = ch.icon;
        return (
          <div
            key={ch.label}
            className="absolute left-1/2 top-1/2 w-0 h-0"
            style={{
              animation: 'orbit 40s linear infinite',
              animationDelay: `${-(ch.deg / 360) * 40}s`,
            }}
          >
            <div style={{ transform: 'translateX(140px)' }}>
              <div
                className="flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ animation: 'orbit 40s linear infinite reverse', animationDelay: `${-(ch.deg / 360) * 40}s` }}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#050A29]"
                  style={{
                    borderColor: ch.color,
                    borderWidth: '1px',
                    boxShadow: `0 0 12px ${ch.color}20`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: ch.color }} />
                </div>
                <span
                  className="whitespace-nowrap text-[10px] font-medium mt-1.5"
                  style={{ color: `${ch.color}AA` }}
                >
                  {ch.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30" width="280" height="280" style={{ animation: 'orbit 40s linear infinite' }}>
        <circle cx="140" cy="140" r="140" fill="none" stroke="#4F60FA" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};
