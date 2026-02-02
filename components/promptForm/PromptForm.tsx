'use client'

import { useState } from 'react'

const colors = {
  bg: '#ffffff',
  surface: '#f9fafb',
  border: '#e5e7eb',
  text: '#0f172a',
  muted: '#64748b',
  primary: '#2563eb'
}


type Option = {
  label: string
  value: string
}

type PromptFormProps = {
  data: {
    niche?: {
      roles?: Option[]
      tones?: Option[]
      contexts?: string[]
      responsibilities?: string[]
      strategies?: string[]
      grammarStyles?: string[]
      audiences?: string[]
      responseFormats?: string[]
    }
  }
}

const labelStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  color: colors.text,
  marginBottom: 6
}

const selectStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 8,
  border: `1px solid ${colors.border}`,
  fontSize: 14,
  backgroundColor: colors.bg
}

const textareaStyle: React.CSSProperties = {
  ...selectStyle,
  minHeight: 110,
  resize: 'vertical'
}

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  maxWidth: 900,
  margin: '0 auto',
  padding: 32,
  borderRadius: 16,
  background: colors.bg,
  border: `1px solid ${colors.border}`
}

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}

const chipStyle: React.CSSProperties = {
  padding: '6px 12px',
  fontSize: 12,
  borderRadius: 999,
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  cursor: 'pointer'
}

function SelectField({
    label,
    value,
    options,
    onChange
  }: {
    label: string
    value: string
    options: Option[]
    onChange: (v: string) => void
  }) {
    return (
      <div style={fieldStyle}>
        <label style={labelStyle}>{label}</label>
        <select style={selectStyle} value={value} onChange={e => onChange(e.target.value)}>
          <option value="">Select {label}</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  function SelectSimpleField({
    label,
    value,
    options,
    onChange
  }: {
    label: string
    value: string
    options: string[]
    onChange: (v: string) => void
  }) {
    return (
      <div style={fieldStyle}>
        <label style={labelStyle}>{label}</label>
        <select style={selectStyle} value={value} onChange={e => onChange(e.target.value)}>
          <option value="">Select {label}</option>
          {options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    )
  }

  function TextareaField({
  label,
  value,
  suggestions,
  onChange
  }: {
    label: string
    value: string
    suggestions: string[]
    onChange: (v: string) => void
  }) {
    function handleSuggestionClick(text: string) {
    const next =
      value && !value.endsWith('\n') ? value + '\n' + text : value + text
    onChange(next)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}
    >
      <label
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: '#0f172a'
        }}
      >
        {label}
      </label>

      <div style={{ position: 'relative' }}>
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={`Describe the ${label.toLowerCase()}`}
          style={{
            width: '100%',
            minHeight: 120,
            padding: '14px 0px',
            borderRadius: 12,
            border: '1px solid #e5e7eb',
            fontSize: 14,
            lineHeight: 1.6,
            resize: 'vertical'
          }}
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Clear field"
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              width: 26,
              height: 26,
              borderRadius: '50%',
              border: 'none',
              background: '#e5e7eb',
              color: '#0f172a',
              fontSize: 14,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
        )}
      </div>

      {suggestions.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8
          }}
        >
          {suggestions.map(item => (
            <button
              key={item}
              type="button"
              onClick={() => handleSuggestionClick(item)}
              style={{
                padding: '6px 12px',
                borderRadius: 999,
                background: '#f1f5f9',
                border: '1px solid #e5e7eb',
                fontSize: 12,
                cursor: 'pointer'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

type OutputPromptBoxProps = {
  value: string
}

function OutputPromptBox({ value }: OutputPromptBoxProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy(text: string) {
    try {
      // Caminho moderno
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback mobile / Safari
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        textarea.style.left = '-9999px'

        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      setCopied(true)
      setTimeout(() => setCopied(false), 2500)

    } catch (err) {
      alert('❌ Unable to copy. Please copy manually.')
      console.error('Copy failed:', err)
    }
  }

  return (
    <section
      style={{
        marginTop: 40,
        padding: 24,
        borderRadius: 16,
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 700 }}>
        Generated Prompt
      </h3>

      <textarea
        readOnly
        value={value}
        placeholder="Your generated prompt will appear here..."
        style={{
          minHeight: 180,
          padding: '14px 16px',
          borderRadius: 12,
          border: `1px solid ${colors.border}`,
          background: colors.bg,
          resize: 'vertical',
          fontSize: 14,
          lineHeight: 1.6
        }}
      />

      <button
        type="button"
        onClick={() => handleCopy(value)}
        disabled={!value}
        style={{
          alignSelf: 'flex-end',
          padding: '10px 18px',
          borderRadius: 10,
          background: value ? colors.primary : '#94a3b8',
          color: '#ffffff',
          fontWeight: 600,
          cursor: value ? 'pointer' : 'not-allowed'
        }}
      >
        Copy Prompt
      </button>

      {copied && (
        <span
          style={{
            fontSize: 13,
            color: '#16a34a',
            fontWeight: 500
          }}
        >
          ✅ Prompt copied! Paste it into your favorite AI ✨
        </span>
      )}
    </section>
  )
}

export default function PromptForm({ data }: PromptFormProps) {
  const niche = data?.niche

  const [state, setState] = useState({
    role: '',
    tone: '',
    context: '',
    responsibility: '',
    strategy: '',
    grammarStyle: '',
    audience: '',
    responseFormat: ''
  })

  const [generatedPrompt, setGeneratedPrompt] = useState('')

  if (!niche) {
    return <div style={{ color: 'red' }}>Niche data not loaded.</div>
  }

  function update(key: keyof typeof state, value: string) {
    setState(prev => ({ ...prev, [key]: value }))
  }

  function buildPrompt(state: any) {
  return `
  You are acting as a ${state.role}.

  Tone of voice:
  ${state.tone}

  Strategic context:
  ${state.context}

  Main responsibilities:
  ${state.responsibility}

  Strategy type:
  ${state.strategy}

  Grammar style:
  ${state.grammarStyle}

  Target audience:
  ${state.audience}

  Response format:
  ${state.responseFormat}

  Deliver a high-quality, expert-level answer.
  `.trim()
  }

  return (
    <section style={sectionStyle}>
      <SelectField
        label="Role"
        value={state.role}
        options={niche.roles ?? []}
        onChange={v => update('role', v)}
      />

      <SelectField
        label="Tone of Voice"
        value={state.tone}
        options={niche.tones ?? []}
        onChange={v => update('tone', v)}
      />

      <TextareaField
        label="Strategic Context"
        value={state.context}
        suggestions={niche.contexts ?? []}
        onChange={v => update('context', v)}
      />

      <TextareaField
        label="Responsibilities"
        value={state.responsibility}
        suggestions={niche.responsibilities ?? []}
        onChange={v => update('responsibility', v)}
      />

      <SelectSimpleField
        label="Strategy Type"
        value={state.strategy}
        options={niche.strategies ?? []}
        onChange={v => update('strategy', v)}
      />

      <SelectSimpleField
        label="Grammar Style"
        value={state.grammarStyle}
        options={niche.grammarStyles ?? []}
        onChange={v => update('grammarStyle', v)}
      />

      <SelectSimpleField
        label="Target Audience"
        value={state.audience}
        options={niche.audiences ?? []}
        onChange={v => update('audience', v)}
      />

      <SelectSimpleField
        label="Response Format"
        value={state.responseFormat}
        options={niche.responseFormats ?? []}
        onChange={v => update('responseFormat', v)}
      />

      <button
        type="button"
        onClick={() => {
          const prompt = buildPrompt(state)
          setGeneratedPrompt(prompt)
        }}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: 14,
          background: '#2563eb',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: 15
        }}
      >
        Generate Prompt
      </button>

      <OutputPromptBox value={generatedPrompt} />

    </section>
  )
}






// 'use client'

// import { useState } from 'react'

// type Option = {
//   label: string
//   value: string
// }

// type DigitalMarketingNiche = {
//   name: string
//   roles: Option[]
//   tones: Option[]
//   contexts: string[]
//   responsibilities: string[]
//   strategies: string[]
//   grammarStyles: string[]
//   audiences: string[]
//   responseFormats: string[]
// }

// type PromptFormProps = {
//   data: {
//     niche?: {
//       roles?: any[]
//       tones?: any[]
//       contexts?: string[]
//       responsibilities?: string[]
//       strategies?: string[]
//       grammarStyles?: string[]
//       audiences?: string[]
//       responseFormats?: string[]
//     }
//   }
// }

// const colors = {
//   bg: '#ffffff',
//   surface: '#f9fafb',
//   border: '#e5e7eb',
//   text: '#0f172a',
//   muted: '#64748b',
//   primary: '#2563eb'
// }


// export default function PromptForm({ data }: PromptFormProps) {

//   const niche = data?.niche

//   if (!niche) {
//     return (
//       <div style={{ color: 'red' }}>
//         Niche data not loaded correctly.
//       </div>
//     )
//   }

//   const labelStyle: React.CSSProperties = {
//     fontSize: 14,
//     fontWeight: 600,
//     marginBottom: 6,
//     color: '#0f172a'
//   }

//   const selectStyle: React.CSSProperties = {
//     width: '100%',
//     padding: '12px 14px',
//     borderRadius: 8,
//     border: '1px solid #e5e7eb',
//     fontSize: 14,
//     backgroundColor: '#ffffff'
//   }

//   const rowStyle: React.CSSProperties = {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: 16,
//     marginBottom: 20
//   }

//   const fullRowStyle: React.CSSProperties = {
//     marginBottom: 20
//   }

//   const [state, setState] = useState({
//     role: '',
//     tone: '',
//     context: '',
//     responsibility: '',
//     strategy: '',
//     grammarStyle: '',
//     audience: '',
//     responseFormat: ''
//   })

//   function update(key: keyof typeof state, value: string) {
//     setState(prev => ({ ...prev, [key]: value }))
//   }

//   function SelectField({
//     label,
//     value,
//     options,
//     onChange
//   }: {
//     label: string
//     value: string
//     options: { label: string; value: string }[]
//     onChange: (v: string) => void
//   }) {
//     return (
//       <div className="flex flex-col gap-2">
//         <label className="font-medium">{label}</label>
//         <select
//           className="select"
//           value={value}
//           onChange={e => onChange(e.target.value)}
//         >
//           <option value="">Select {label}</option>
//           {options.map(opt => (
//             <option key={opt.value} value={opt.value}>
//               {opt.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     )
//   }

//   function SelectSimpleField({
//     label,
//     value,
//     options,
//     onChange
//   }: {
//     label: string
//     value: string
//     options: string[]
//     onChange: (v: string) => void
//   }) {
//     return (
//       <div className="flex flex-col gap-2">
//         <label className="font-medium">{label}</label>
//         <select
//           className="select"
//           value={value}
//           onChange={e => onChange(e.target.value)}
//         >
//           <option value="">Select {label}</option>
//           {options.map(opt => (
//             <option key={opt} value={opt}>
//               {opt}
//             </option>
//           ))}
//         </select>
//       </div>
//     )
//   }

//   function TextareaField({
//     label,
//     value,
//     suggestions,
//     onChange
//   }: {
//     label: string
//     value: string
//     suggestions: string[]
//     onChange: (v: string) => void
//   }) {
//     return (
//       <div className="flex flex-col gap-3">
//         <label className="font-medium">{label}</label>

//         <textarea
//           className="textarea min-h-[110px]"
//           value={value}
//           onChange={e => onChange(e.target.value)}
//           placeholder={`Describe the ${label.toLowerCase()}`}
//         />

//         <div className="flex flex-wrap gap-2">
//           {suggestions.map(item => (
//             <button
//               key={item}
//               type="button"
//               onClick={() => onChange(item)}
//               className="rounded-full bg-muted px-3 py-1 text-xs transition hover:bg-muted/70"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>
//     )
//   }


//   return (
//     <section className="space-y-8">
//       {/* ROLE */}
//       <SelectField
//         label="Role"
//         value={state.role}
//         options={niche.roles ?? [] }
//         onChange={v => update('role', v)}
//       />

//       {/* TONE */}
//       <SelectField
//         label="Tone of Voice"
//         value={state.tone}
//         options={niche.tones ?? [] }
//         onChange={v => update('tone', v)}
//       />

//       {/* CONTEXT */}
//       <TextareaField
//         label="Strategic Context"
//         value={state.context}
//         suggestions={niche.contexts ?? []}
//         onChange={v => update('context', v)}
//       />

//       {/* RESPONSIBILITIES */}
//       <TextareaField
//         label="Responsibilities"
//         value={state.responsibility}
//         suggestions={niche.responsibilities ?? []}
//         onChange={v => update('responsibility', v)}
//       />

//       {/* STRATEGY */}
//       <SelectSimpleField
//         label="Strategy Type"
//         value={state.strategy}
//         options={niche.strategies ?? []}
//         onChange={v => update('strategy', v)}
//       />

//       {/* GRAMMAR */}
//       <SelectSimpleField
//         label="Grammar Style"
//         value={state.grammarStyle}
//         options={niche.grammarStyles ?? []}
//         onChange={v => update('grammarStyle', v)}
//       />

//       {/* AUDIENCE */}
//       <SelectSimpleField
//         label="Target Audience"
//         value={state.audience}
//         options={niche.audiences ?? []}
//         onChange={v => update('audience', v)}
//       />

//       {/* RESPONSE FORMAT */}
//       <SelectSimpleField
//         label="Response Format"
//         value={state.responseFormat}
//         options={niche.responseFormats ?? []}
//         onChange={v => update('responseFormat', v)}
//       />

//       <button
//         type="button"
//         className="w-full rounded-xl bg-primary py-3 text-white font-semibold transition hover:opacity-90"
//       >
//         Generate Prompt
//       </button>
//     </section>
//   )
// }






// 'use client'

// import { useEffect, useState } from 'react'
// import { appManager } from '@/core/AppManager'

// type PromptFormProps = {
//   data: {
//     niche: {
//       roles: { label: string; value: string }[]
//       tones: { label: string; value: string }[]
//       contexts?: any[]
//     }
//   }
// }

// export default function PromptForm({ data }: PromptFormProps) {
//   const [state, setState] = useState({
//     role: '',
//     specialization: '',
//     tone: '',
//     context: '',
//     strategy: ''
//   })

//   useEffect(() => {
//     appManager.setNicheData(data)
//   }, [data])

//   function handleChange(field: string, value: string) {
//     setState(prev => ({ ...prev, [field]: value }))

//     // regra automática simples
//     if (field === 'strategy' || field === 'specialization') {
//       appManager.updateScore(appManager.score + 10)
//     }
//   }

//   if (!data) return null

//   const { niche } = data;

//   console.log('PROMPT FORM DATA:', data)
//   console.log('NICHE:', data?.niche)
//   console.log('ROLES:', data?.niche?.roles)

//   return (
//     <div className="space-y-6">
//       <select className="select" defaultValue="">
//         <option value="">Select role</option>
//         {niche.roles.map(role => (
//           <option key={role.value} value={role.value}>
//             {role.label}
//           </option>
//         ))}
//       </select>

//       <select className="select" defaultValue="">
//         <option value="">Select tone</option>
//         {niche.tones.map(tone => (
//           <option key={tone.value} value={tone.value}>
//             {tone.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   )
// }


/*
'use client';

import { Form, Input, Select, Button, Card, Row, Col, App, Typography, Tooltip, Space } from 'antd';
import { useState, useEffect } from 'react';
import { 
  Copy, Sparkles, UserCircle, Target, MessageSquare, 
  FileText, Lightbulb, Briefcase, Code, PenTool, Scale, Users, TrendingUp, GraduationCap, HeartPulse, Building2, Wallet
} from 'lucide-react';

const { Title, Text } = Typography;

// Mapeamento de ícones para os nichos do JSON
const nicheIcons: Record<string, React.ReactNode> = {
  "digital-marketing": <TrendingUp size={20} />,
  "software-development": <Code size={20} />,
  "content-creation": <PenTool size={20} />,
  "legal-assistant": <Scale size={20} />,
  "human-resources": <Users size={20} />,
  "sales-expert": <Briefcase size={20} />,
  "education-tutor": <GraduationCap size={20} />,
  "medical-health": <HeartPulse size={20} />,
  "real-estate": <Building2 size={20} />,
  "finances": <Wallet size={20} />
};

export default function PromptForm({ dict }: { dict: any }) {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

  const tForm = dict?.form || {};
  const tCommon = dict?.common || {};
  const tNiche = dict?.niche || {};

  // Função para preencher o formulário automaticamente
  const applyTemplate = (key: string) => {
    const niche = tNiche[key];
    form.setFieldsValue({
      role: niche.title,
      context: niche.description,
      tone: 'professional',
      format: 'Markdown',
      responsibilities: 'Gerar um plano detalhado focado em resultados.',
      strategy: 'Foco em conversão',
      grammar: 'Clara e objetiva',
      userInfo: 'Público geral interessado no tema'
    });
    message.success(`Template de ${niche.title} aplicado!`);
  };

  const onFinish = (values: any) => {
    const prompt = `
# ROLE
Atue como ${values.role}.

# CONTEXT
${values.context}

# RESPONSIBILITIES
${values.responsibilities}

# STRATEGY & STYLE
- Tom de voz: ${values.tone}
- Gramática: ${values.grammar}
- Estratégia: ${values.strategy}
- Público-alvo: ${values.userInfo}

# OUTPUT FORMAT
Entregue o resultado no formato: ${values.format}
    `.trim();

    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    message.success(tCommon.copied);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      

      <section>
        <div className="items-center gap-2 mb-4">
          <Lightbulb className="text-amber-500 w-5 h-5" />
          <Text strong className="text-slate-500 uppercase tracking-widest text-xs">Exemplo de prompts: </Text>
        </div>
        <div className="flex flex-wrap gap-3">
          {Object.keys(tNiche).map((key) => (
            <Tooltip key={key} title={tNiche[key].description}>
              <Button 
                onClick={() => applyTemplate(key)}
                className="flex items-center gap-2 h-10 border-slate-200 hover:border-blue-500 rounded-full shadow-sm transition-all"
              >
                <span className="text-blue-600">{nicheIcons[key] || <Sparkles size={18} />}</span>
                {tNiche[key].title}
              </Button>
            </Tooltip>
          ))}
        </div>
      </section>

      <Row gutter={[24, 24]}>

        <Col xs={24} lg={14}>
          <Card className="shadow-xl rounded-2xl bg-white/80 backdrop-blur-sm">
            <Space align="center" size={8} style={{ marginBottom: 24 }}>
              <Sparkles className="text-blue-600 w-6 h-6" />
              <Title level={4} style={{ margin: 0 }}>{tCommon.generate}</Title>
            </Space>

            <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="role" label={tForm.role} rules={[{ required: true }]}>
                    <Input prefix={<UserCircle size={16} className="text-slate-400" />} placeholder={tForm.placeholders?.role} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="tone" label={tForm.tone} rules={[{ required: true }]}>
                    <Select placeholder="Selecione">
                      <Select.Option value="professional">Profissional</Select.Option>
                      <Select.Option value="creative">Criativo</Select.Option>
                      <Select.Option value="authoritative">Autoritário</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="context" label={tForm.context} rules={[{ required: true }]}>
                <Input.TextArea rows={2} placeholder={tForm.placeholders?.context} />
              </Form.Item>

              <Form.Item name="responsibilities" label={tForm.responsibilities}>
                <Input.TextArea rows={2} />
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="strategy" label={tForm.strategy}><Input prefix={<Target size={16} />} /></Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="grammar" label={tForm.grammar}><Input prefix={<MessageSquare size={16} />} /></Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="userInfo" label={tForm.userInfo}><Input /></Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="format" label={tForm.format} rules={[{ required: true }]}>
                    <Input prefix={<FileText size={16} />} placeholder={tForm.placeholders?.format} />
                  </Form.Item>
                </Col>
              </Row>

              <Button type="primary" htmlType="submit" block size="large" className="h-12 font-bold bg-blue-600 rounded-xl mt-4">
                {tCommon.generate}
              </Button>
            </Form>
          </Card>
        </Col>


        <Col xs={24} lg={10}>
          <div className="sticky top-6">
            <Card 
              title={<span className="flex items-center gap-2"><FileText size={18} /> Prompt Mágico</span>}
              className="shadow-2xl rounded-2xl border-t-4 border-blue-500"
            >
              <Input.TextArea
                value={generatedPrompt}
                readOnly
                rows={16}
                placeholder="O resultado aparecerá aqui..."
                className="font-mono text-sm bg-slate-50 border-none resize-none p-4"
              />
              <Button
                onClick={copyToClipboard}
                disabled={!generatedPrompt}
                block
                size="large"
                icon={<Copy size={18} />}
                className="mt-6 h-12 rounded-xl font-bold border-blue-500 text-blue-600"
              >
                {tCommon.copy}
              </Button>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

*/

/*
'use client';

import { Form, Input, Select, Button, Card, message, Row, Col } from 'antd';
import { useState } from 'react';
import { App } from 'antd';

type PromptFormValues = {
  role: string;
  context: string;
  tone: string;
  format: string;
};

type PromptFormProps = {
  dict?: Record<string, string>;
};

export default function PromptForm({ dict }: PromptFormProps) {
  const { message } = App.useApp();
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

  const onFinish = (values: PromptFormValues) => {
    const prompt = `
Atue como ${values.role}.
Contexto: ${values.context}.
Tom de voz: ${values.tone}.
Formato de saída: ${values.format}.
    `.trim();

    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    message.success('Prompt copiado com sucesso!');
  };

  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={12}>
        <Card title="Configurações do Prompt" className="shadow-lg">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="role"
              label="Cargo / Atuação da IA"
              rules={[{ required: true, message: 'Informe o cargo da IA' }]}
            >
              <Input placeholder="Ex: Copywriter Sênior" />
            </Form.Item>

            <Form.Item
              name="context"
              label="Contexto"
              rules={[{ required: true, message: 'Informe o contexto' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="tone"
              label="Tom de Voz"
              rules={[{ required: true, message: 'Selecione o tom de voz' }]}
            >
              <Select
                placeholder="Selecione"
                options={[
                  { value: 'professional', label: 'Profissional' },
                  { value: 'creative', label: 'Criativo' },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="format"
              label="Formato de Saída"
              rules={[{ required: true, message: 'Informe o formato de saída' }]}
            >
              <Input placeholder="Ex: Markdown, Lista, Tabela" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block size="large">
              Gerar Prompt
            </Button>
          </Form>
        </Card>
      </Col>

      
      <Col xs={24} lg={12}>
        <Card title="Resultado" className="shadow-lg">
          <Input.TextArea
            value={generatedPrompt}
            readOnly
            rows={12}
            placeholder="O prompt gerado aparecerá aqui..."
            style={{ marginBottom: 16 }}
          />

          <Button
            onClick={copyToClipboard}
            disabled={!generatedPrompt}
            block
          >
            Copiar Prompt
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
*/

/*
'use client';
import { Form, Input, Select, Button, Card, message } from 'antd';
//import { CopyOutlined, RobotOutlined } from "@ant-design/icons";
import { useState } from 'react';

export default function PromptForm({ dict }: any) {
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const onFinish = (values: any) => {
    const prompt = `Atue como ${values.role}. 
    Contexto: ${values.context}. 
    Responsabilidades: ${values.tasks}. 
    Tom de voz: ${values.tone}. 
    Gramática: ${values.grammar}.
    Estratégia: ${values.strategy}.
    Público: ${values.userInfo}.
    Formato de Saída: ${values.format}.`;
    
    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    message.success('Prompt copiado!');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <Card title="Configurações do Prompt" className="shadow-lg">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="role" label="Cargo/Atuação da IA"><Input placeholder="Ex: Copywriter Sênior" /></Form.Item>
          <Form.Item name="context" label="Contexto"><Input.TextArea /></Form.Item>
          <Form.Item name="tone" label="Tom de Voz">
            <Select options={[{value: 'professional', label: 'Profissional'}, {value: 'creative', label: 'Criativo'}]} />
          </Form.Item>
          <Form.Item name="format" label="Formato de Saída"><Input placeholder="Ex: Tabela, Markdown, Lista" /></Form.Item>
          <Button type="primary" htmlType="submit" block icon={<div />}>Gerar Prompt Mágico</Button>
        </Form>
      </Card>

      <Card title="Resultado" className="shadow-lg bg-gray-50">
        <Input.TextArea value={generatedPrompt} readOnly rows={12} style={{ marginBottom: '15px' }} />
        <Button icon={<div />} onClick={copyToClipboard} disabled={!generatedPrompt}>Copiar Prompt</Button>
      </Card>
    </div>
  );
}
*/