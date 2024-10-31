import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import imagem from "./logo-fent-2.png";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

const themes = [
  {
    name: "Contencioso Administrativo",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Aula 01: Defesa Administrativa Federal (parte 1 e 2)",
            duration: "03:35:11",
          },
          {
            name: "Aula 05: Defesa Administrativa Estadual",
            duration: "03:35:11",
          },
          {
            name: "Aula 12: Estratégia de Defesa da Execução Fiscal",
            duration: "03:35:11",
          },
          {
            name: "Aula 15: Defesa Administrativa: Estaduais",
            duration: "03:35:11",
          },
        ],
      },
      {
        name: "Jornada 3 - Contencioso",
        lessons: [
          {
            name: "Aula 17: Contencioso Administrativo: Masterclass do Processo Administrativo",
            duration: "01:43:12",
          },
          {
            name: "Aula 19(parte 1 e 2): Contencioso Administrativo: Provas nos procedimentos aduaneiros sob a ótica do CARF - Paulo Roberto Moreira",
            duration: "01:43:12",
          },
        ],
      },
    ],
  },
  {
    name: "Créditos Previdenciários",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas Práticas",
        lessons: [
          {
            name: "Aula 02: Operacionalização de Créditos Previdenciários",
            duration: "02:49:56",
          },
          {
            name: "Oficina Prática - Créditos Previdenciários para Construtoras",
            duration: "02:06:44",
          },
        ],
      },
      {
        name: "Jornada 8 - Recuperação de Créditos Previdenciários",
        lessons: [
          { name: "Aula 01: Introdução", duration: "00:15:49" },
          { name: "Aula 02: Enquadramento e CP", duration: "00:40:18" },
          { name: "Aula 03: Análise Prática", duration: "00:31:02" },
          { name: "Aula 04: CPRB", duration: "00:38:56" },
          { name: "Aula 05: Retenção Previdenciária", duration: "00:23:31" },
          { name: "Aula 06: Operacionalização", duration: "01:34:17" },
        ],
      },
    ],
  },
  {
    name: "Planejamento Tributário",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Aula 04: Como escolher o melhor regime tributário para o próximo ano (parte 1 e 2)",
            duration: "03:55:33",
          },
          {
            name: "Aula 06: Planejamento Tributário Logístico",
            duration: "02:03:06",
          },
          {
            name: "Aula 07: Planejamento Tributário para Clínicas Médicas",
            duration: "01:54:41",
          },
          {
            name: "Aula 10: Como escolher o melhor estado para realizar o desembaraço aduaneiro",
            duration: "01:59:53",
          },
        ],
      },
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 04: Webinar - Planejamento Tributário",
            duration: "02:36:39",
          },
        ],
      },
    ],
  },
  {
    name: "Planejamento Tributário - Clínicas Médicas",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Aula 07: Planejamento Tributário para Clínicas Médicas",
            duration: "01:54:41",
          },
        ],
      },
      {
        name: "Jornada 3 - Contencioso",
        lessons: [
          {
            name: "Aula 16: Aula Bônus - Planejamento Tributário para Clínicas Médicas",
            duration: "02:09:09",
          },
        ],
      },
    ],
  },
  {
    name: "Compliance",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas Práticas",
        lessons: [
          {
            name: "Aula 03: Compliance de SPED FISCAL e EFD-Contribuições",
            duration: "01:48:23",
          },
        ],
      },
    ],
  },
  {
    name: "SPED Fiscal ICMS/IPI",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Aula 03: Compliance de SPED FISCAL e EFD-Contribuições",
            duration: "01:48:23",
          },
        ],
      },
      {
        name: "Jornada 5 - SPED FISCAL do zero",
        lessons: [
          {
            name: "Aula 1: O que é e qual a sua finalidade",
            duration: "00:16:58",
          },
          {
            name: "Aula 2: Obrigatoriedade e Consulta",
            duration: "00:15:45",
          },
          {
            name: "Aula 3: Legislação",
            duration: "00:09:56",
          },
          {
            name: "Aula 4: Periodicidade e Apresentação",
            duration: "00:11:13",
          },
          {
            name: "Aula 5: Quem pode transmitir",
            duration: "00:07:29",
          },
          {
            name: "Aula 6: Guarda dos arquivos",
            duration: "00:05:21",
          },
          {
            name: "Aula 7: Multas",
            duration: "00:15:52",
          },
          {
            name: "Aula 8: Rotina Fiscal",
            duration: "00:46:33",
          },
          {
            name: "Aula 9: PVA e Guia Prático",
            duration: "00:05:15",
          },
          {
            name: "Aula 10: Blocos e Registros",
            duration: "00:08:47",
          },
          {
            name: "Aula 11: Registros que você precisa conhecer",
            duration: "00:04:17",
          },
          {
            name: "Aula 12: Visão Macro",
            duration: "00:09:09",
          },
          {
            name: "Aula 13: Bloco 0",
            duration: "00:26:23",
          },
          {
            name: "Aula 14: Registro 0150",
            duration: "00:10:20",
          },
          {
            name: "Aula 15: Registro 0200",
            duration: "00:11:11",
          },
          {
            name: "Aula 16: Registro 0300",
            duration: "00:06:37",
          },
          {
            name: "Aula 17: Registro 0400",
            duration: "00:06:06",
          },
          {
            name: "Aula 18: Registro 0500",
            duration: "00:06:42",
          },
          {
            name: "Aula 19: Bloco B",
            duration: "00:10:58",
          },
          {
            name: "Aula 20: Bloco C",
            duration: "00:40:34",
          },
          {
            name: "Aula 21: Bloco D",
            duration: "00:30:14",
          },
          {
            name: "Aula 22: Bloco E",
            duration: "00:05:15",
          },
          {
            name: "Aula 23: Registro E110",
            duration: "00:17:34",
          },
          {
            name: "Aula 24: Registro E200",
            duration: "00:14:40",
          },
          {
            name: "Aula 25: Registro E250",
            duration: "00:07:28",
          },
          {
            name: "Aula 26: Registro E310",
            duration: "00:17:36",
          },
          {
            name: "Aula 27: Registro E20",
            duration: "00:11:31",
          },
          {
            name: "Aula 28: Registro E530",
            duration: "00:07:28",
          },
          {
            name: "Aula 29: Escrituração Extemporânea",
            duration: "00:16:14",
          },
          {
            name: "Aula 30: Nota Fiscal Complementar",
            duration: "00:13:55",
          },
          {
            name: "Aula 31: Retificação",
            duration: "00:14:16",
          },
          {
            name: "Aula 32: Registros Específicos",
            duration: "00:06:46",
          },
          {
            name: "Aula 33: Blocos G, H e K",
            duration: "00:06:07",
          },
          {
            name: "Aula 34: Erros de validação",
            duration: "00:22:07",
          },
          {
            name: "Aula 35: Arquivo no Excel",
            duration: "00:11:13",
          },
        ],
      },
    ],
  },
  {
    name: "Subvenções",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Oficina Extra - Subvenções - Novos Procedimentos",
            duration: "01:08:49",
          },
        ],
      },
    ],
  },
  {
    name: "Contabilidade",
    courses: [
      {
        name: "Jornada 12 - Contabilidade",
        lessons: [
          {
            name: "Aula 01: Contabilidade",
            duration: "01:00:23",
          },
          {
            name: "Aula 02: Contabilidade na Prática",
            duration: "00:15:36",
          },
          {
            name: "Aula 03: Contabilidade - Contas de resultado",
            duration: "00:23:04",
          },
          {
            name: "Aula 04: Exercícios com resultado",
            duration: "00:24:34",
          },
          {
            name: "Aula 05: Estrutura conceitual",
            duration: "00:28:12",
          },
          {
            name: "Aula 06: Como auditar DRE - Fabiana Matos",
            duration: "03:27:29",
          },
        ],
      },
    ],
  },

  {
    name: "Transação Tributária",
    courses: [
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 08: Transação Tributária",
            duration: "01:30:45",
          },
        ],
      },
    ],
  },
  {
    name: "Créditos Tributários",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Aula 11: PER/DCOMP",
            duration: "02:41:40",
          },
          {
            name: "Aula 13: Recuperação de Créditos para Supermercados",
            duration: "02:00:26",
          },
          {
            name: "Aula 14: Recuperação de Créditos do Simples Nacional",
            duration: "02:07:00",
          },
          {
            name: "Aula 16: PERSE",
            duration: "01:43:09",
          },
          {
            name: "Oficina Extra - Recuperação de Créditos na transição da Reforma Tributária",
            duration: "04:41:36",
          },
        ],
      },
      {
        name: "Jornada 7 - Recuperação de Créditos Tributários na Prática para empresas do Simples Nacional, Lucro Real e Lucro Presumido",
        lessons: [
          {
            name: "Aula 01: Introdução",
            duration: "00:08:19",
          },
          {
            name: "Aula 02: Sistema Tributário e Hierarquia das Normas",
            duration: "00:26:58",
          },
          {
            name: "Aula 03: Como pesquisar a legislação tributária",
            duration: "00:19:10",
          },
          {
            name: "Aula 04: Rotina Fiscal",
            duration: "00:12:08",
          },
          {
            name: "Aula 05: Noções de escrituração fiscal",
            duration: "00:21:36",
          },
          {
            name: "Aula 06: Princípio da não-cumulatividade",
            duration: "00:13:39",
          },
          {
            name: "Aula 07: Masterclass ICMS",
            duration: "01:06:44",
          },
          {
            name: "Aula 08: Masterclass IPI",
            duration: "00:49:56",
          },
          {
            name: "Aula 09: Masterclass PIS e COFINS",
            duration: "00:48:19",
          },
          {
            name: "Aula 10: Masterclass Simples Nacional",
            duration: "00:14:49",
          },
          {
            name: "Aula 11: Revisão Fiscal do Simples Nacional",
            duration: "00:52:25",
          },
          {
            name: "Aula 12: Revisão Fiscal ICMS e IPI (Lucro Real e Presumido)",
            duration: "00:45:58",
          },
          {
            name: "Aula 13: Revisão Fiscal PIS e COFINS (Lucro Real)",
            duration: "00:22:31",
          },
          {
            name: "Aula 14: SN na Prática - Oportunidades de Créditos",
            duration: "00:30:45",
          },
          {
            name: "Aula 15: SN na Prática - Pontos de atenção",
            duration: "00:09:07",
          },
          {
            name: "Aula 16: SN na Prática - ICMS-ST e Monofásicos",
            duration: "00:26:29",
          },
          {
            name: "Aula 17: SN na Prática - Retificação PGDAS",
            duration: "00:06:45",
          },
          {
            name: "Aula 18: SN na Prática - Segregação de Receitas",
            duration: "00:02:04",
          },
          {
            name: "Aula 19: SN na Prática - Restituição e Compensação",
            duration: "00:07:23",
          },
          {
            name: "Aula 20: LP e LR na prática - ICMS: Energia elétrica",
            duration: "00:25:34",
          },
          {
            name: "Aula 21: LP e LR na prática - ICMS: Ativo Imobilizado",
            duration: "00:41:22",
          },
          {
            name: "Aula 22: LP e LR na prática - ICMS: Insumos",
            duration: "00:08:22",
          },
          {
            name: "Aula 23: LP e LR na prática - ICMS: Aquisição de fornecedores do Simples Nacional",
            duration: "00:09:51",
          },
          {
            name: "Aula 24: LP e LR na prática - ICMS: Operacionalização do Crédito",
            duration: "00:07:18",
          },
          {
            name: "Aula 25: LP e LR na prática - IPI: Vendas com suspensão",
            duration: "00:18:46",
          },
          {
            name: "Aula 26: LP e LR na prática - IPI: Aquisições de comercial atacadista",
            duration: "00:16:03",
          },
          {
            name: "Aula 27: LP e LR na prática - IPI: Importações",
            duration: "00:07:54",
          },
          {
            name: "Aula 28: LP e LR na prática - IPI: Operacionalização do Crédito",
            duration: "00:02:49",
          },
          {
            name: "Aula 29: LR na prática - PIS e COFINS: Créditos Básicos",
            duration: "00:23:03",
          },
          {
            name: "Aula 30: LR na prática - PIS e COFINS: Vale-Transporte",
            duration: "00:11:56",
          },
          {
            name: "Aula 31: LR na prática - PIS e COFINS: EPI",
            duration: "00:11:55",
          },
          {
            name: "Aula 32: LR na prática - PIS e COFINS: Insumos",
            duration: "00:09:56",
          },
          {
            name: "Aula 33: LR na prática - PIS e COFINS: Ativo Imobilizado",
            duration: "00:06:41",
          },
          {
            name: "Aula 34: LR na prática - PIS e COFINS: Aluguel",
            duration: "00:05:22",
          },
          {
            name: "Aula 35: LR na prática - PIS e COFINS: Frete",
            duration: "00:06:43",
          },
          {
            name: "Aula 36: LR na prática - PIS e COFINS: Diesel",
            duration: "00:32:59",
          },
          {
            name: "Aula 37: Classificação dos Créditos",
            duration: "00:21:17",
          },
          {
            name: "Aula 38: Operacionalização",
            duration: "00:14:24",
          },
          {
            name: "Aula 39: Projeção de utilização dos créditos",
            duration: "00:08:59",
          },
          {
            name: "Aula 40: Dossiê de Composição do Trabalho",
            duration: "00:04:56",
          },
          {
            name: "Aula 41: Auditoria Preventiva",
            duration: "00:10:50",
          },
          {
            name: "Aula 42: Caso Prático Simples Nacional",
            duration: "00:10:50",
          },
          {
            name: "Aula 43: Caso Prático ICMS e IPI",
            duration: "00:10:50",
          },
          {
            name: "Aula 44: Caso Prático PIS e COFINS",
            duration: "00:10:50",
          },
          {
            name: "Aula 45: Exclusão do ICMS da Base de PIS e COFINS",
            duration: "00:54:48",
          },
        ],
      },
      {
        name: "Jornada 10 - Mapeamento de OT",
        lessons: [
          {
            name: "Aula 01: Mapeamentos de Oportunidades Tributárias",
            duration: "01:29:24",
          },
        ],
      },
      {
        name: "Jornada 11 - Aulas com Convidados",
        lessons: [
          {
            name: "Aula 01: Oportunidade do Agronegócio para Advogados - Fernanda Bueno",
            duration: "01:01:01",
          },
        ],
      },
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 02: Mapeamento de oportunidades tributárias e rating de risco",
            duration: "01:33:23",
          },
        ],
      },
    ],
  },
  {
    name: "EFD-Contribuições",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Aula 03: Compliance de SPED FISCAL e EFD-Contribuições",
            duration: "01:48:23",
          },
        ],
      },
      {
        name: "Jornada 6 - EFD-Contribuição do Zero",
        lessons: [
          {
            name: "Aula 1: Conceito",
            duration: "00:12:50",
          },
          {
            name: "Aula 2: Obrigatoriedade e Consulta",
            duration: "00:14:11",
          },
          {
            name: "Aula 3: Legislação",
            duration: "00:06:05",
          },
          {
            name: "Aula 4: Periodicidade",
            duration: "00:07:03",
          },
          {
            name: "Aula 5: Transmissão",
            duration: "00:03:44",
          },
          {
            name: "Aula 6: Guarda dos arquivos",
            duration: "00:06:04",
          },
          {
            name: "Aula 7: Multas",
            duration: "00:07:13",
          },
          {
            name: "Aula 8: PVA e Guia Prático",
            duration: "00:10:58",
          },
          {
            name: "Aula 9: Blocos e Registros",
            duration: "00:12:35",
          },
          {
            name: "Aula 10: Registros que precisa conhecer",
            duration: "00:04:39",
          },
          {
            name: "Aula 11: Visão Macro",
            duration: "00:12:47",
          },
          {
            name: "Aula 12: Registro 000",
            duration: "00:14:27",
          },
          {
            name: "Aula 13: Registro 0150",
            duration: "00:09:25",
          },
          {
            name: "Aula 14: Registro 0200",
            duration: "00:10:16",
          },
          {
            name: "Aula 15: Registro 0400",
            duration: "00:07:43",
          },
          {
            name: "Aula 16: Registro 0500",
            duration: "00:12:04",
          },
          {
            name: "Aula 17: Bloco A",
            duration: "00:15:52",
          },
          {
            name: "Aula 18: Bloco C",
            duration: "00:21:50",
          },
          {
            name: "Aula 19: Bloco D",
            duration: "00:18:24",
          },
          {
            name: "Aula 20: Bloco F",
            duration: "00:13:16",
          },
          {
            name: "Aula 21: Registro F120/F130",
            duration: "00:13:42",
          },
          {
            name: "Aula 22: Registro F600",
            duration: "00:14:14",
          },
          {
            name: "Aula 23: Bloco M",
            duration: "00:19:21",
          },
          {
            name: "Aula 24: Registro M110/510",
            duration: "00:07:52",
          },
          {
            name: "Aula 25: Registro M200/M600",
            duration: "00:12:12",
          },
          {
            name: "Aula 26: Registro M400/M800",
            duration: "00:07:08",
          },
          {
            name: "Aula 27: Bloco 1 - Controle de créditos",
            duration: "00:17:45",
          },
          {
            name: "Aula 28: Escrituração Extemporânea",
            duration: "00:11:26",
          },
          {
            name: "Aula 29: Retificações",
            duration: "00:24:07",
          },
          {
            name: "Aula 30: Erros de validação",
            duration: "00:20:41",
          },
          {
            name: "Aula 31: Manusear o arquivo no Excel",
            duration: "00:11:44",
          },
          {
            name: "Aula 32: Devo declarar PER/DCOMP?",
            duration: "00:06:41",
          },
        ],
      },
    ],
  },
  {
    name: "Estruturação Societária",
    courses: [
      {
        name: "Jornada 11 - Aulas com Convidados",
        lessons: [
          {
            name: "Aula 03 - Posicionamento e Acordo de Sócios - Dimas Tafelli",
            duration: "02:23:33",
          },
        ],
      },
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 09: Estruturação Societária para Escritórios - Dimas Tafelli",
            duration: "01:44:58",
          },
        ],
      },
    ],
  },
  {
    name: "Execução Fiscal",
    courses: [
      {
        name: "Jornada 3 - Contencioso",
        lessons: [
          {
            name: "Aula 8: Contencioso Judicial - Execução Fiscal: introdução",
            duration: "00:26:50",
          },
          {
            name: "Aula 9: Contencioso Judicial - Execução Fiscal: citação",
            duration: "00:12:12",
          },
          {
            name: "Aula 10: Contencioso Judicial - Execução Fiscal: garantia do Juízo",
            duration: "00:28:19",
          },
          {
            name: "Aula 15: Aula Bônus - Técnicas de Defesa na Execução Fiscal - Tiago Scherer",
            duration: "02:11:23",
          },
        ],
      },
    ],
  },
  {
    name: "ICMS",
    courses: [
      {
        name: "Jornada 4 - Imersão em tributos indiretos",
        lessons: [
          {
            name: "Aula 2: ICMS e ICMS-ST",
            duration: "02:49:38",
          },
          {
            name: "Aula 6: Bônus- Masterclass ICMS - Custo Variável",
            duration: "01:39:11",
          },
        ],
      },
      {
        name: "Jornada 7 - Recuperação de Créditos Tributários na Prática para empresas do Simples Nacional, Lucro Real e Lucro Presumido",
        lessons: [
          {
            name: "Aula 07 - Masterclass ICMS",
            duration: "01:06:44",
          },
          {
            name: "Aula 20 - LP e LR na prática - ICMS: Energia elétrica",
            duration: "00:25:34",
          },
          {
            name: "Aula 21 - LP e LR na prática - ICMS: Ativo Imobilizado",
            duration: "00:41:22",
          },
          {
            name: "Aula 22 - LP e LR na prática - ICMS: Insumos",
            duration: "00:08:22",
          },
          {
            name: "Aula 23 - LP e LR na prática - ICMS: Aquisição de fornecedores do Simples Nacional",
            duration: "00:09:51",
          },
          {
            name: "Aula 24 - LP e LR na prática - ICMS: Operacionalização do Crédito",
            duration: "00:07:18",
          },
        ],
      },
    ],
  },

  {
    name: "PIS e COFINS",
    courses: [
      {
        name: "Jornada 4 - Imersão em tributos indiretos",
        lessons: [
          {
            name: "Aula 3: IPI, PIS E COFINS",
            duration: "02:28:28",
          },
          {
            name: "Aula 8 - Bônus - Masterclass PIS e COFINS",
            duration: "01:14:03",
          },
        ],
      },
      {
        name: "Jornada 7 - Recuperação de Créditos Tributários na Prática para empresas do Simples Nacional, Lucro Real e Lucro Presumido",
        lessons: [
          {
            name: "Aula 09 - Masterclass PIS e COFINS",
            duration: "00:48:19",
          },
          {
            name: "Aula 29 - LR na prática - PIS e COFINS: Créditos Básicos",
            duration: "00:23:03",
          },
          {
            name: "Aula 30 - LR na prática - PIS e COFINS: Vale-Transporte",
            duration: "00:11:56",
          },
          {
            name: "Aula 31 - LR na prática - PIS e COFINS: EPI",
            duration: "00:11:55",
          },
          {
            name: "Aula 32 - LR na prática - PIS e COFINS: Insumos",
            duration: "00:09:56",
          },
          {
            name: "Aula 33 - LR na prática - PIS e COFINS: Ativo Imobilizado",
            duration: "00:06:41",
          },
          {
            name: "Aula 34 - LR na prática - PIS e COFINS: Aluguel",
            duration: "00:05:22",
          },
          {
            name: "Aula 35 - LR na prática - PIS e COFINS: Frete",
            duration: "00:06:43",
          },
          {
            name: "Aula 36 - LR na prática - PIS e COFINS: Diesel",
            duration: "00:32:59",
          },
          {
            name: "Aula 45 - Exclusão do ICMS da Base de PIS e COFINS",
            duration: "00:54:48",
          },
        ],
      },
    ],
  },
  {
    name: "IPI",
    courses: [
      {
        name: "Jornada 4 - Imersão em tributos indiretos",
        lessons: [
          {
            name: "Aula 3: IPI, PIS E COFINS",
            duration: "02:28:28",
          },
          {
            name: "Aula 7: Bônus - Masterclass IPI",
            duration: "01:22:56",
          },
        ],
      },
      {
        name: "Jornada 7 - Recuperação de Créditos Tributários na Prática para empresas do Simples Nacional, Lucro Real e Lucro Presumido",
        lessons: [
          {
            name: "Aula 08 - Masterclass IPI",
            duration: "00:49:56",
          },
          {
            name: "Aula 25 - LP e LR na prática - IPI: Vendas com suspensão",
            duration: "00:18:46",
          },
          {
            name: "Aula 26 - LP e LR na prática - IPI: Aquisições de comercial atacadista",
            duration: "00:16:03",
          },
          {
            name: "Aula 27 - LP e LR na prática - IPI: Importações",
            duration: "00:07:54",
          },
          {
            name: "Aula 28 - LP e LR na prática - IPI: Operacionalização do Crédito",
            duration: "00:02:49",
          },
        ],
      },
    ],
  },
  {
    name: "Laudo de Desossa",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Aula 09: Laudo de Desossa",
            duration: "01:32:03",
          },
        ],
      },
      {
        name: "Jornada 9 - Laudo de Desossa",
        lessons: [
          {
            name: "Aula 01: Passo a passo do laudo de desossa",
            duration: "02:00:07",
          },
        ],
      },
    ],
  },
  {
    name: "Simples Nacional",
    courses: [
      {
        name: "Jornada 4 - Imersão em tributos indiretos",
        lessons: [
          {
            name: "Aula 5: Simples Nacional",
            duration: "01:35:38",
          },
        ],
      },
      {
        name: "Jornada 7 - Recuperação de Créditos Tributários na Prática para empresas do Simples Nacional, Lucro Real e Lucro Presumido",
        lessons: [
          {
            name: "Aula 10 - Masterclass Simples Nacional",
            duration: "00:14:49",
          },
          {
            name: "Aula 11 - Revisão Fiscal do Simples Nacional",
            duration: "00:52:25",
          },
          {
            name: "Aula 14 - SN na Prática - Oportunidades de Créditos",
            duration: "00:30:45",
          },
          {
            name: "Aula 15 - SN na Prática - Pontos de atenção",
            duration: "00:09:07",
          },
          {
            name: "Aula 16 - SN na Prática - ICMS-ST e Monofásicos",
            duration: "00:26:29",
          },
          {
            name: "Aula 17 - SN na Prática - Retificação PGDAS",
            duration: "00:06:45",
          },
          {
            name: "Aula 18 - SN na Prática - Segregação de Receitas",
            duration: "00:02:04",
          },
          {
            name: "Aula 19 - SN na Prática - Restituição e Compensação",
            duration: "00:07:23",
          },
        ],
      },
    ],
  },

  {
    name: "Tributarista Iniciante",
    courses: [
      {
        name: "Jornada 2 - Introdução à carreira tributária",
        lessons: [
          {
            name: "Aula 01: Uma conversa franca: A faculdade não te prepara para o mercado de trabalho",
            duration: "00:26:06",
          },
          {
            name: "Aula 02: Áreas de atuação do tributarista",
            duration: "00:22:23",
          },
          {
            name: "Aula 03: Princípios tributários: aplicação prática",
            duration: "00:45:07",
          },
          {
            name: "Aula 04: Princípios constitucionais do processo",
            duration: "00:24:52",
          },
          {
            name: "Aula 05: Hierarquia das normas na prática",
            duration: "00:34:31",
          },
          {
            name: "Aula 06: O Básico que todo tributarista precisa saber: classificação de receitas",
            duration: "00:19:46",
          },
          {
            name: "Aula 07: O básico que todo tributarista precisa saber: Receita bruta",
            duration: "00:16:44",
          },
          {
            name: "Aula 08: Lucro Real",
            duration: "00:30:54",
          },
          {
            name: "Aula 09: Lucro Presumido",
            duration: "00:18:32",
          },
        ],
      },
      {
        name: "Jornada 4 - Imersão em tributos indiretos",
        lessons: [
          {
            name: "Aula 1: Introdução e conceitos gerais",
            duration: "02:45:52",
          },
        ],
      },
      {
        name: "Jornada 7 - Recuperação de Créditos Tributários na Prática para empresas do Simples Nacional, Lucro Real e Lucro Presumido",
        lessons: [
          {
            name: "Aula 02 - Sistema Tributário e Hierarquia das Normas",
            duration: "00:26:58",
          },
          {
            name: "Aula 03 - Como pesquisar a legislação tributária",
            duration: "00:19:10",
          },
          {
            name: "Aula 06 - Princípio da não-cumulatividade",
            duration: "00:13:39",
          },
        ],
      },
      {
        name: "Jornada 11 - Aulas com Convidados",
        lessons: [
          {
            name: "Aula 04: Como Transformar em Excel - Drielli",
            duration: "00:05:37",
          },
        ],
      },
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 05: Como começar na área tributária",
            duration: "01:50:19",
          },
        ],
      },
    ],
  },
  {
    name: "Reforma Tributária",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Oficina Extra - Recuperação de Créditos na transição da Reforma Tributária",
            duration: "04:41:36",
          },
        ],
      },
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 03: Reforma Tributária - PEC 45-A",
            duration: "01:48:53",
          },
          {
            name: "Aula 06: 2º Fórum - Reforma Tributária",
            duration: "02:08:11",
          },
          {
            name: "Aula 07: Encontro ao vivo - Reforma Tributária - Apresentação grupo de estudos (Parte 1,2)",
            duration: "02:52:43 + 02:35:63",
          },
          {
            name: "Aula 11: Arranjos de Pagamento do IBS - Luciana Grillo",
            duration: "01:31:04",
          },
        ],
      },
      {
        name: "Jornada 16 - Introdução para a Reforma Tributária",
        lessons: [
          {
            name: "Aula 01: Sistema Tributário Brasileiro",
            duration: "00:18:03",
          },
          {
            name: "Aula 02: Tramitação e aprovação de uma PEC",
            duration: "00:14:53",
          },
          {
            name: "Aula 03: Tramitação da EC 132/2024",
            duration: "00:17:28",
          },
          {
            name: "Aula 04: Novos Princípios Constitucionais Tributários",
            duration: "00:21:52",
          },
          {
            name: "Aula 05: Criação do IVA – Extinção dos demais tributos",
            duration: "00:21:30",
          },
          {
            name: "Aula 06: Características do IBS e da CBS – parte 1",
            duration: "00:31:34",
          },
          {
            name: "Aula 07: Características do IBS e da CBS – parte 2",
            duration: "00:23:46",
          },
          {
            name: "Aula 08: Características do imposto seletivo",
            duration: "00:21:14",
          },
        ],
      },
      {
        name: "Jornada 17 - Conteúdo Técnico para a Reforma Tributária",
        lessons: [
          {
            name: "Aula 01: Créditos Presumidos",
            duration: "00:22:44",
          },
          {
            name: "Aula 02: Cesta Básica Nacional",
            duration: "00:07:36",
          },
          {
            name: "Aula 03: Regimes Específicos",
            duration: "00:12:22",
          },
          {
            name: "Aula 04: Isenção e Imunidade",
            duration: "00:11:49",
          },
          {
            name: "Aula 05: Regimes Diferenciados – Regimes Favorecidos",
            duration: "00:05:02",
          },
          {
            name: "Aula 06: Extinção dos benefícios fiscais do ICMS",
            duration: "00:07:37",
          },
          {
            name: "Aula 07: Transição: Regras e Período",
            duration: "00:10:00",
          },
          {
            name: "Aula 08: IPVA – ITCMD e IPTU",
            duration: "00:06:41",
          },
        ],
      },
      {
        name: "Jornada 18 - Impactos da Reforma Tributária por segmento econômico",
        lessons: [
          {
            name: "Aula 01: Como fica o setor de serviços com a Reforma Tributária",
            duration: "00:03:26",
          },
          {
            name: "Aula 02: Cenário pós Reforma Tributária",
            duration: "00:01:41",
          },
          {
            name: "Aula 03: Impactos da Reforma Tributária para as empresas do Simples Nacional",
            duration: "00:02:39",
          },
          {
            name: "Aula 04: Setores com alíquota reduzida",
            duration: "00:03:02",
          },
          {
            name: "Aula 05: Período de transição do IBS e da CBS",
            duration: "00:03:07",
          },
          {
            name: "Aula 06: Impactos da reforma tributária no setor do agronegócio",
            duration: "00:14:26",
          },
          {
            name: "Aula 07: Projetos de Lei Complementar Nº 68/2024 e 108/2024",
            duration: "00:10:22",
          },
          {
            name: "Aula 08: Impactos positivos para o Agronegócio",
            duration: "00:04:38",
          },
          {
            name: "Aula 09: Impactos negativos para o agronegócio",
            duration: "00:06:48",
          },
          {
            name: "Aula 10: Como fica o setor da indústria com a Reforma Tributária",
            duration: "00:34:24",
          },
          {
            name: "Aula 11: Regimes Especiais",
            duration: "00:22:20",
          },
          {
            name: "Aula 12: Desoneração das exportações",
            duration: "00:17:34",
          },
          {
            name: "Aula 13: Imposto Seletivo",
            duration: "00:23:40",
          },
          {
            name: "Aula 14: Impactos da Reforma no setor de comércio",
            duration: "00:06:06",
          },
          {
            name: "Aula 15: Características do IBS",
            duration: "00:03:39",
          },
          {
            name: "Aula 16: Características da CBS",
            duration: "00:02:08",
          },
          {
            name: "Aula 17: Impactos positivos e negativos da Reforma Tributária para o comércio",
            duration: "00:07:38",
          },
        ],
      },
      {
        name: "Jornada 19 - Conteúdo Prático: Planejamento tributário no período de transição",
        lessons: [
          {
            name: "Aula 01: Créditos Presumidos",
            duration: "01:15:41",
          },
        ],
      },
    ],
  },
  {
    name: "Soft Skills",
    courses: [
      {
        name: "Jornada 14 - FENTSKILLS",
        lessons: [
          {
            name: "Aula 01: Como combater a síndrome do impostos - Rafela Freire",
            duration: "01:31:50",
          },
          {
            name: "Aula 02: estratégia de imagem pessoal - Débora Voss",
            duration: "01:26:18",
          },
        ],
      },
    ],
  },
  {
    name: "Prospecção",
    courses: [
      {
        name: "Jornada 1 - Método OPT - Oficinas práticas",
        lessons: [
          {
            name: "Aula 08: Posicionamento, vendas e negociação",
            duration: "02:44:36",
          },
        ],
      },
      {
        name: "Jornada 10 - Mapeamento de OT",
        lessons: [
          {
            name: "Aula 01: Mapeamentos de Oportunidades Tributárias",
            duration: "01:29:24",
          },
        ],
      },
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 02: Mapeamento de oportunidades tributárias e rating de risco",
            duration: "01:33:23",
          },
        ],
      },
      {
        name: "Jornada 14 - FENTSKILLS",
        lessons: [
          {
            name: "Aula 03: CRM para área jurídica",
            duration: "01:10:51",
          },
          {
            name: "Aula 04: Técnicas de Persuasão com Maria Hallak",
            duration: "01:15:20",
          },
          {
            name: "Aula 05: Prospecção pelo LinkedIn",
            duration: "01:14:45",
          },
        ],
      },
    ],
  },
  {
    name: "Revisão Fiscal",
    courses: [
      {
        name: "Jornada 4 - Imersão em tributos indiretos",
        lessons: [
          {
            name: "Aula 4: Revisão Fiscal",
            duration: "02:42:24",
          },
        ],
      },
      {
        name: "Jornada 7 - Recuperação de Créditos Tributários na Prática para empresas do Simples Nacional, Lucro Real e Lucro Presumido",
        lessons: [
          {
            name: "Aula 04 - Rotina Fiscal",
            duration: "00:12:08",
          },
          {
            name: "Aula 05 - Noções de escrituração fiscal",
            duration: "00:21:36",
          },
          {
            name: "Aula 11 - Revisão Fiscal do Simples Nacional",
            duration: "00:52:25",
          },
          {
            name: "Aula 12 - Revisão Fiscal ICMS e IPI (Lucro Real e Presumido)",
            duration: "00:45:58",
          },
          {
            name: "Aula 13 - Revisão Fiscal PIS e COFINS (Lucro Real)",
            duration: "00:22:31",
          },
        ],
      },
    ],
  },
  {
    name: "Aulas de Inglês",
    courses: [
      {
        name: "Jornada 14 - FENTSKILLS",
        lessons: [
          {
            name: "Comece aqui",
            duration: "00:10:14",
          },
          {
            name: "Aula 01: Lógica para criar qualquer frase em inglês - Sujeito",
            duration: "00:06:24",
          },
          {
            name: "Aula 02: Lógica para criar qualquer frase em inglês - Verbo",
            duration: "00:08:27",
          },
          {
            name: "Aula 03: Lógica para criar qualquer frase em inglês - Complemento",
            duration: "00:08:05",
          },
          {
            name: "Aula 04: Lógica para criar qualquer frase em inglês - Questions",
            duration: "00:08:15",
          },
          {
            name: "Aula 05: Lógica para criar qualquer frase em inglês - Negatives",
            duration: "00:06:31",
          },
          {
            name: "Aula 06: Lógica para criar qualquer frase em inglês - Auxiliares em afirmações",
            duration: "00:04:42",
          },
          {
            name: "Aula 07: Lógica para criar qualquer frase em inglês - Revisão",
            duration: "00:05:17",
          },
          {
            name: "Aula 01: Let's get to work - Verb to be Affirmative",
            duration: "00:11:10",
          },
          {
            name: "Aula 02: Let's get to work - Verb to be Negative",
            duration: "00:12:48",
          },
          {
            name: "Aula 03: Let's get to work - Adjectives",
            duration: "00:07:34",
          },
          {
            name: "Aula 04: Let's get to work - Possessive Adjectives",
            duration: "00:09:43",
          },
          {
            name: "Aula 05: Let's get to work - Interrogative Pronouns",
            duration: "00:11:21",
          },
          {
            name: "Aula 06: Let's get to work - Indefinite Articles",
            duration: "00:07:39",
          },
          {
            name: "Aula 07: Let's get to work - Definite Articles",
            duration: "00:03:35",
          },
          {
            name: "Aula 01: Let's talk about the present - There Be",
            duration: "00:08:57",
          },
          {
            name: "Aula 02: Let's talk about the present - Present Simple Affirmative",
            duration: "00:12:57",
          },
          {
            name: "Aula 03: Let's talk about the present - Present Simple Interrogative",
            duration: "00:09:04",
          },
          {
            name: "Aula 04: Let's talk about the present - Present Simple Negative",
            duration: "00:06:38",
          },
          {
            name: "Aula 05: Let's talk about the present - Verb to have",
            duration: "00:14:46",
          },
          {
            name: "Aula 06: Let's talk about the present - Object Pronouns",
            duration: "00:08:30",
          },
          {
            name: "Aula 07: Let's talk about the present - Present Progressive Affirmative",
            duration: "00:05:05",
          },
          {
            name: "Aula 08: Let's talk about the present - Present Progressive Interrogative",
            duration: "00:05:10",
          },
          {
            name: "Aula 09: Let's talk about the present - Present Progressive Negative",
            duration: "00:08:51",
          },
          {
            name: "Aula 01: Back to the future - Possessive Pronouns",
            duration: "00:11:38",
          },
          {
            name: "Aula 02: Back to the future - Past Simple Affirmative",
            duration: "00:13:43",
          },
          {
            name: "Aula 03: Back to the future - Past Simple Interrogative",
            duration: "00:07:36",
          },
          {
            name: "Aula 04: Back to the future - Past Simple Negative",
            duration: "00:06:38",
          },
          {
            name: "Aula 05: Back to the future - Future Simple Aff, Neg. Int",
            duration: "00:07:46",
          },
          {
            name: "Aula 06: Back to the future - Future Simple Aff, Neg. Int",
            duration: "00:16:38",
          },
          {
            name: "Aula 07: Back to the future - Past Continuous",
            duration: "00:09:05",
          },
          {
            name: "Aula 08: Back to the future - Future Cont_prog",
            duration: "00:06:45",
          },
          {
            name: "Aula 01: Verbos Modais 1",
            duration: "00:13:55",
          },
          {
            name: "Aula 02: Verbos Modais 2",
            duration: "00:06:27",
          },
          {
            name: "Aula 03: Verbos Modais 3",
            duration: "00:07:37",
          },
          {
            name: "Aula 04: Verbos Modais 4",
            duration: "00:07:19",
          },
          {
            name: "Aula 05: Verbos Modais 5",
            duration: "00:03:20",
          },
          {
            name: "Aula 06: Verbos Modais 6",
            duration: "00:02:33",
          },
          {
            name: "Aula 07: Verbos Modais 7",
            duration: "00:05:29",
          },
        ],
      },
    ],
  },
  {
    name: "Comece aqui",
    courses: [
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 01: FIRST CALL",
            duration: "01:39:48",
          },
        ],
      },
    ],
  },

  {
    name: "Contencioso Judicial",
    courses: [
      {
        name: "Jornada 3 - Contencioso",
        lessons: [
          {
            name: "Aula 1: Contencioso Judicial - Estratégias para escolher a melhor ação.",
            duration: "00:29:24",
          },
          {
            name: "Aula 2: Contencioso Judicial - Mandado de Segurança",
            duration: "00:52:11",
          },
          {
            name: "Aula 3: Contencioso Judicial - Ação Anulatória e Embargos à Execução",
            duration: "00:42:55",
          },
          {
            name: "Aula 4: Contencioso Judicial - Ação Declaratória",
            duration: "00:34:57",
          },
          {
            name: "Aula 5: Contencioso Judicial - Ação de Repetição de Indébito",
            duration: "00:32:25",
          },
          {
            name: "Aula 8: Contencioso Judicial - Execução Fiscal: introdução",
            duration: "00:26:50",
          },
          {
            name: "Aula 9: Contencioso Judicial - Execução Fiscal: citação",
            duration: "00:12:12",
          },
          {
            name: "Aula 10: Contencioso Judicial - Execução Fiscal: garantia do Juízo",
            duration: "00:28:19",
          },
          {
            name: "Aula 15: Aula Bônus - Técnicas de Defesa na Execução Fiscal - Tiago Scherer",
            duration: "02:11:23",
          },
          {
            name: "Aula 16: Aula Bônus - Planejamento Tributário para Clínicas Médicas",
            duration: "02:09:09",
          },
          {
            name: "Aula 18: Contencioso Administrativo: Condução de defesa e recurso no CARF - Tatiana Belisário",
            duration: "02:05:53",
          },
        ],
      },
      {
        name: "Jornada 11 - Aulas com Convidados",
        lessons: [
          {
            name: "Aula 02: Estratégias na tomada de decisão processual - Nacle Asis",
            duration: "02:14:18",
          },
        ],
      },
      {
        name: "Jornada 13 - Encontros Ao Vivo",
        lessons: [
          {
            name: "Aula 10: Prescrição Tributária - Tiago Scherer",
            duration: "01:37:07",
          },
        ],
      },
    ],
  },
];

export function CurriculumCalendar() {
  const [studyDates, setStudyDates] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [daysPerWeek, setDaysPerWeek] = useState([]);
  const [hoursPerDay, setHoursPerDay] = useState(0.5);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const rightPanelRef = useRef();
  const [isEndDateCalculated, setIsEndDateCalculated] = useState(false);

  const handleThemeSelection = (themeName) => {
    if (selectedThemes.includes(themeName)) {
      setSelectedThemes(selectedThemes.filter((theme) => theme !== themeName));
    } else {
      setSelectedThemes([...selectedThemes, themeName]);
    }
  };
  const handleDownloadPdf = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const element = rightPanelRef.current;
    if (element) {
      // Aplicando CSS diretamente para evitar page-breaks em elementos críticos
      const style = document.createElement("style");
      style.innerHTML = `
        .right-panel * {
          page-break-inside: avoid;
        }
        .study-date-box {
          page-break-inside: avoid;
          margin-bottom: 15px;
        }
      `;
      document.head.appendChild(style);

      const opt = {
        margin: [10, 10, 10, 10], // Margens em milímetros: [topo, direita, base, esquerda]
        filename: "CalendarioCurricular.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 4, // Aumentar a escala para melhorar a resolução da imagem capturada
          useCORS: true,
          logging: true,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
        },
        jsPDF: {
          unit: "mm",
          format: "a3", // Define o formato como A4
          orientation: "landscape", // Ajuste da orientação: "portrait" para retrato, "landscape" para paisagem
        },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .toPdf()
        .get("pdf")
        .then((pdf) => {
          // Centralizar o conteúdo da primeira página
          const totalPages = pdf.internal.getNumberOfPages();
          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            const pageWidth = pdf.internal.pageSize.getWidth();

            // Título na parte superior de cada página
            pdf.setFontSize(12);
            pdf.text(pageWidth / 2, 10, "Calendário Curricular", {
              align: "center",
            });
          }
        })
        .save()
        .catch((error) => console.error("Erro ao gerar PDF: ", error));
    } else {
      console.error("Elemento não encontrado para gerar o PDF");
    }
  };

  const handleCalculateEndDate = () => {
    if (selectedThemes.length === 0 || daysPerWeek.length === 0 || !startDate) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    const totalSeconds = selectedThemes.reduce((acc, themeName) => {
      const theme = themes.find((t) => t.name === themeName);
      if (theme) {
        return (
          acc +
          theme.courses.reduce((courseAcc, course) => {
            return (
              courseAcc +
              course.lessons.reduce((lessonAcc, lesson) => {
                const [hours, minutes, seconds] = lesson.duration
                  .split(":")
                  .map(Number);
                return (
                  lessonAcc +
                  (hours || 0) * 3600 +
                  (minutes || 0) * 60 +
                  (seconds || 0)
                );
              }, 0)
            );
          }, 0)
        );
      }
      return acc;
    }, 0);

    const totalHours = totalSeconds / 3600;
    const totalHoursPerWeek = daysPerWeek.length * hoursPerDay;

    if (totalHoursPerWeek === 0) {
      alert("Selecione pelo menos um dia e defina horas por dia.");
      return;
    }

    // Converter a data de início fornecida para um objeto Date e garantir que a hora seja meio-dia
    const start = new Date(startDate);
    start.setHours(12, 0, 0, 0); // Definir a hora como meio-dia para evitar problemas de fuso horário

    let currentDate = new Date(start);
    currentDate.setHours(12, 0, 0, 0); // Definir a hora como meio-dia

    const dayMapping = {
      segunda: 1,
      terça: 2,
      quarta: 3,
      quinta: 4,
      sexta: 5,
      sábado: 6,
      domingo: 0,
    };

    // Converte os dias escolhidos para números, de acordo com a semana (domingo = 0, segunda = 1, etc.)
    const normalizedDaysPerWeek = daysPerWeek
      .map((day) => dayMapping[day.toLowerCase()])
      .sort((a, b) => a - b);

    // Função para encontrar o próximo dia de estudo a partir da data atual
    const getNextStudyDate = (fromDate) => {
      let dayIndex = fromDate.getDay();
      for (let i = 0; i < normalizedDaysPerWeek.length; i++) {
        if (normalizedDaysPerWeek[i] > dayIndex) {
          const daysToAdd = normalizedDaysPerWeek[i] - dayIndex;
          const nextDate = new Date(fromDate);
          nextDate.setDate(fromDate.getDate() + daysToAdd);
          return nextDate;
        }
      }
      // Se não encontramos um dia de estudo na mesma semana, avançar para a próxima semana
      const daysToAdd = 7 - dayIndex + normalizedDaysPerWeek[0];
      const nextDate = new Date(fromDate);
      nextDate.setDate(fromDate.getDate() + daysToAdd);
      return nextDate;
    };

    // Começar a partir da data de início correta
    let totalLessonTimeRemaining = totalSeconds;
    let studyDatesArray = [];
    let continuedLessons = {}; // Para manter as aulas que ainda não terminaram
    let themeIndex = 0; // Controle para manter o tema atual
    let courseIndex = 0; // Controle para manter o curso atual
    let lessonIndex = 0; // Controle para manter a aula atual

    while (totalLessonTimeRemaining > 0) {
      // Encontrar o próximo dia válido de estudo
      currentDate = getNextStudyDate(currentDate);

      const dayOfWeek = currentDate
        .toLocaleDateString("pt-BR", { weekday: "long" })
        .toLowerCase();

      let lessonsForDay = [];
      let availableTime = hoursPerDay * 3600;

      while (availableTime > 0 && themeIndex < selectedThemes.length) {
        const themeName = selectedThemes[themeIndex];
        const theme = themes.find((t) => t.name === themeName);
        if (theme) {
          const course = theme.courses[courseIndex];
          if (course) {
            const lesson = course.lessons[lessonIndex];
            if (lesson) {
              const [hours, minutes, seconds] = lesson.duration
                .split(":")
                .map(Number);
              let lessonDuration =
                (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
              let lessonName = lesson.name;

              if (continuedLessons[lessonName]) {
                // Se a aula está sendo continuada, atualize a duração com o que sobrou
                lessonDuration = continuedLessons[lessonName];
                lessonsForDay.push(`${lessonName} (continuação)`);
              } else {
                // Se é a primeira vez que a aula está sendo exibida
                lessonsForDay.push(lessonName);
              }

              if (lessonDuration <= availableTime) {
                availableTime -= lessonDuration;
                totalLessonTimeRemaining -= lessonDuration;
                delete continuedLessons[lessonName];

                // Passa para a próxima aula
                lessonIndex += 1;

                // Se não houver mais aulas, passa para o próximo curso
                if (lessonIndex >= course.lessons.length) {
                  lessonIndex = 0;
                  courseIndex += 1;

                  // Se não houver mais cursos, passa para o próximo tema
                  if (courseIndex >= theme.courses.length) {
                    courseIndex = 0;
                    themeIndex += 1;
                  }
                }
              } else {
                // Se não houver tempo suficiente, continua no próximo dia
                continuedLessons[lessonName] = lessonDuration - availableTime;
                totalLessonTimeRemaining -= availableTime;
                availableTime = 0;
              }
            }
          }
        }
      }

      studyDatesArray.push({
        date: `${
          dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
        } - ${String(currentDate.getDate()).padStart(2, "0")}/${String(
          currentDate.getMonth() + 1
        ).padStart(2, "0")}/${currentDate.getFullYear()}`,
        lessons: lessonsForDay,
      });

      // Avançar para o próximo dia após processar o dia atual
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Cálculo do formattedDate para a data de término
    let formattedDate;

    if (studyDatesArray.length > 0) {
      // Utilizar a última data do studyDatesArray
      const lastStudyEntry = studyDatesArray[studyDatesArray.length - 1];
      const lastStudyDate = lastStudyEntry.date.split(" - ")[1];

      formattedDate = lastStudyDate; // Reutilizar a string da última data de estudo
    } else {
      // Caso especial: Se não houver datas no cronograma, utilize a data atual
      formattedDate = `${String(currentDate.getDate()).padStart(
        2,
        "0"
      )}/${String(currentDate.getMonth() + 1).padStart(
        2,
        "0"
      )}/${currentDate.getFullYear()}`;
    }

    // Definir a data de término no estado do componente
    setEndDate(formattedDate);
    setStudyDates(studyDatesArray);
    setIsEndDateCalculated(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="curriculum-calendar">
      <div className="left-panel">
        <div className="panel" style={{ marginTop: 20 }}>
          <h1>Calendário Curricular - FENT</h1>
        </div>
        <div className="theme-selection panel">
          <label>
            <b>📚Selecione aqui seus temas de estudo⬇</b>
          </label>
          <div className="checkbox-group">
            {themes.map((theme, index) => (
              <label key={index} className="theme-checkbox">
                <input
                  type="checkbox"
                  value={theme.name}
                  onChange={() => handleThemeSelection(theme.name)}
                />
                {theme.name}
              </label>
            ))}
          </div>
          <hr />
        </div>

        <div className="days-selection panel">
          <label>
            <b>📅 Planeje seus dias de estudo⬇</b>
          </label>
          <div className="checkbox-group">
            {[
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sábado",
              "Domingo",
            ].map((day) => (
              <label key={day} className="day-checkbox">
                <input
                  type="checkbox"
                  value={day}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDaysPerWeek([...daysPerWeek, e.target.value]);
                    } else {
                      setDaysPerWeek(
                        daysPerWeek.filter((d) => d !== e.target.value)
                      );
                    }
                  }}
                />
                {day}
              </label>
            ))}
          </div>
          <hr />
        </div>

        <div className="input-group panel">
          <label>
            <b>⏳Quantas horas você pode estudar⬇</b>
          </label>
          <select
            onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
            className="hours-dropdown"
          >
            <option value={0.5}>30 minutos</option>
            <option value={1}>1 hora</option>
            <option value={2}>2 horas</option>
            <option value={3}>3 horas</option>
          </select>
          <hr />
        </div>

        <div className="input-group panel">
          <label>
            <b>📚Data do inicio da sua jornada⬇:</b>
          </label>
          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            className="date-input"
          />
          <hr />
        </div>

        <button
          style={{ marginBottom: 20 }}
          className="calculate-button"
          onClick={handleCalculateEndDate}
        >
          🕑Calcule aqui seu tempo de formação⬇
        </button>
        <button
          style={{ marginBottom: 20 }}
          className="download-button"
          onClick={handleDownloadPdf}
        >
          🎓Imprima aqui o seu cronograma⬇
        </button>
      </div>

      <div
        className="right-panel"
        ref={rightPanelRef}
        style={{
          marginTop: 20,
          padding: "20px",
          backgroundColor: "#fff", // Certifique-se de que o fundo é branco
          color: "#000", // Certifique-se de que o texto é preto
          width: "100%", // Define a largura completa para capturar corretamente
          boxSizing: "border-box",
        }}
      >
        {/* Conteúdo da parte direita que será baixado como PDF */}
        {selectedThemes.length > 0 && (
          <div>
            <div className="journey-details">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h1>Jornadas e Aulas Relacionadas:</h1>
                <img
                  style={{ width: 60 }}
                  src={imagem}
                  alt="Imagem relacionada"
                />
              </div>
              {selectedThemes.map((themeName, themeIndex) => {
                const theme = themes.find((t) => t.name === themeName);
                return (
                  theme &&
                  theme.courses.map((course, courseIndex) => (
                    <div
                      key={`${themeIndex}-${courseIndex}`}
                      className="journey-card"
                      style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <h4>{course.name}</h4>
                      <ul>
                        {course.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex}>{lesson.name}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                );
              })}
            </div>
            {endDate && (
              <div
                className="end-date"
                style={{
                  padding: "20px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  marginTop: "20px",
                }}
              >
                <h3>Data estimada de término: {endDate}</h3>
                <h4>Dias de estudo até o término:</h4>
                <div
                  className="study-dates-grid"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  {studyDates.length > 0 ? (
                    studyDates.map((dateObj, index) => (
                      <div
                        key={index}
                        className="study-date-box"
                        style={{
                          backgroundColor: "rgb(32, 65, 152)",
                          color: "white",
                          padding: "10px",
                          borderRadius: "5px",
                          textAlign: "center",
                          display: "inline-block", // Ajustar dinamicamente a largura ao conteúdo
                          width: "auto", // Define que a largura se ajusta ao conteúdo
                          maxWidth: "100%", // Limita para que a largura não ultrapasse o contêiner pai
                          margin: "10px", // Espaçamento entre as caixas
                          boxSizing: "border-box", // Inclui padding e bordas no tamanho total da caixa
                        }}
                      >
                        <div>{dateObj.date}</div>
                        <div>
                          <b>Aulas:</b>
                          <ul
                            style={{ paddingLeft: "20px", textAlign: "left" }}
                          >
                            {dateObj.lessons.length > 0 ? (
                              dateObj.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex}>{lesson}</li>
                              ))
                            ) : (
                              <li>Nenhuma aula disponível</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>Nenhuma data selecionada</div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
