'use client';

import React, { useState } from 'react';
import { Form, Input, Select, Button, App, Typography, Tooltip, Space, Row, Col } from 'antd';
import styles from './PromptForm.module.css';
import { useParams } from 'next/navigation';
import pt from "@/i18n/pt.json";
import en from "@/i18n/en.json";
import '@/styles/globals.css'

import {
  Copy, 
  Sparkles, 
  UserCircle, 
  Target, 
  MessageSquare, 
  FileText, 
  Lightbulb,
  TrendingUp,
  Code,
  PenTool,
  Scale,
  Users,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Building2,
  Wallet,
  Megaphone,
  ShoppingCart,
  BarChart3,
  Cpu,
  ShieldCheck,
  Palette,
  Camera,
  Languages,
  Headphones,
  LineChart
} from 'lucide-react';

const nicheIcons: Record<string, React.ReactNode> = {
  "digital-marketing": <TrendingUp size={18} />,
  "software-development": <Code size={18} />,
  "content-creation": <PenTool size={18} />,
  "legal-assistant": <Scale size={18} />,
  "human-resources": <Users size={18} />,
  "sales-expert": <Briefcase size={18} />,
  "education-tutor": <GraduationCap size={18} />,
  "medical-health": <HeartPulse size={18} />,
  "real-estate": <Building2 size={18} />,
  "finances": <Wallet size={18} />,
  "copywriting": <Megaphone size={18} />,
  "ecommerce": <ShoppingCart size={18} />,
  "data-analysis": <BarChart3 size={18} />,
  "artificial-intelligence": <Cpu size={18} />,
  "cyber-security": <ShieldCheck size={18} />,
  "graphic-design": <Palette size={18} />,
  "photography": <Camera size={18} />,
  "translation-localization": <Languages size={18} />,
  "customer-support": <Headphones size={18} />,
  "business-strategy": <LineChart size={18} />
};

const dictionaries = { 'pt': pt, 'en': en };

export function usePromptFormDictionary() {
  const { lang } = useParams();
  return dictionaries[lang as keyof typeof dictionaries] ?? pt;
}

const { Title, Text } = Typography;


export default function PromptForm({ dict }: { dict: any }) {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

  const tForm = dict?.form || {};
  const tCommon = dict?.common || {};
  const tNiche = dict?.niche || {};

  const formDict = usePromptFormDictionary(); 

  const applyTemplate = (key: string) => {
    const niche = tNiche[key];
    form.setFieldsValue({
      role: niche.title,
      context: niche.description,
      tone: `${formDict.prompt.tone_text}`,
      format: 'Markdown',
      responsibilities: `${formDict.prompt.responsibilities_text}`,
      strategy: `${formDict.prompt.strategy_text}`,
      grammar: `${formDict.prompt.grammar_text}`,
      userInfo: `${formDict.prompt.target_audience_text}`
    });
    message.success(`${formDict.prompt.template} ${niche.title} ${formDict.prompt.applied}!`);
  };

  const onFinish = (values: any) => {
    const prompt = `# ${formDict.prompt.role}\n${formDict.prompt.act_as} ${values.role}.\n\n# ${formDict.prompt.context}\n${values.context}\n\n# ${formDict.prompt.responsibilities}\n${values.responsibilities}\n\n# ${formDict.prompt.strategy}\n- ${formDict.prompt.tone}: ${values.tone}\n- ${formDict.prompt.target_audience}: ${values.userInfo}\n- ${formDict.prompt.format}: ${values.format}\n- ${formDict.prompt.grammar}: ${values.grammar}\n- ${formDict.prompt.strategy}: ${values.strategy}`;
    setGeneratedPrompt(prompt);
  };

  return (
    <div className={styles.container}>
      {/* Templates Quick-Action */}
      <section className={styles.templateSection}>
        <div className={styles.sectionHeader}>
          <Lightbulb className={styles.sectionIcon} />
          <p className={styles.sectionLabel}>{formDict.prompt.expert_eg}</p>
        </div>
        <div className={styles.templateGrid}>
          {Object.keys(tNiche).map((key) => (
            <Tooltip key={key} title={tNiche[key].description}>
              <button onClick={() => applyTemplate(key)} className={styles.templateButton}>
                <span className={styles.textPrimary}>{nicheIcons[key] || <Sparkles size={16} />}</span>
                {tNiche[key].title}
              </button>
            </Tooltip>
          ))}
        </div>
      </section>

      <div className={styles.mainLayout}>
        {/* Formulário de Configuração */}
        <div className={styles.formWrapper}>
          <div className={styles.glassCard}>
            <Space align="center" className={styles.formHeader}>
              <Sparkles className={styles.formHeaderIcon} />
              <h1 className={styles.sectionTitle}>{formDict.prompt.config_eng}</h1>
            </Space>

            <Form className="formDark" form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item className={styles.formDark} name="role" label={`${formDict.prompt.role_label}`} rules={[{ required: true }]}>
                    <Input prefix={<UserCircle size={16} className={styles.inputPrefixIcon} />} className={styles.customInput} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className={styles.formDark} name="tone" label={`${formDict.prompt.tone_label}`}>
                    <Select className={styles.customSelect}>
                      <Select.Option value="professional">{formDict.prompt.professional}</Select.Option>
                      <Select.Option value="creative">{formDict.prompt.criative}</Select.Option>
                      <Select.Option value="formal">{formDict.prompt.formal}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item className={styles.formDark} name="context" label={`${formDict.prompt.strategic_context}`}>
                <Input.TextArea rows={3} className={styles.customInput} />
              </Form.Item>

               <Form.Item className={styles.formDark} name="responsibilities" label={tForm.responsibilities}>
                <Input.TextArea rows={2} />
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item className={styles.formDark} name="strategy" label={tForm.strategy}><Input prefix={<Target size={16} />} /></Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item className={styles.formDark} name="grammar" label={tForm.grammar}><Input prefix={<MessageSquare size={16} />} /></Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item className={styles.formDark} name="userInfo" label={tForm.userInfo}><Input /></Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item className={styles.formDark} name="format" label={tForm.format} rules={[{ required: true }]}>
                    <Input prefix={<FileText size={16} />} placeholder={tForm.placeholders?.format} />
                  </Form.Item>
                </Col>
              </Row>

              <Button type="primary" htmlType="submit" block className={styles.submitBtn}>
                {formDict.prompt.generate_magic_prompt}
              </Button>
            </Form>
          </div>
        </div>

        {/* Output Sticky */}
        <div className={styles.outputWrapper}>
          <div className={`${styles.glassCard} ${styles.stickyCard}`}>
            <h1 className={styles.sectionTitle}>
              <FileText size={18} className={styles.formHeaderIcon} /> {formDict.prompt.final_result}
            </h1>
            <textarea
              value={generatedPrompt}
              readOnly
              className={styles.promptTextarea}
              placeholder={formDict.prompt.final_instructions}
            />
            <Button 
              onClick={() => {
                navigator.clipboard.writeText(generatedPrompt);
                message.success(tCommon.copied);
              }}
              disabled={!generatedPrompt}
              className={styles.copyBtn}
              icon={<Copy size={18} />}
            >
              {formDict.prompt.copy_prompt}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

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