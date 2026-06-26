export const CATEGORIES = [
  "All",
  "Research Peptides",
  "GLP / Metabolic Research",
  "Recovery / Repair Research",
  "Cognitive / Neuro Research",
  "Longevity Research",
  "Oral Research Products",
  "Research Supplies",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ProductFormat = "vial" | "oral" | "supply";
export type ProductStatus = "coming_soon" | "available" | "restricted";

export interface AvelionProduct {
  id: string;
  name: string;
  strength: string;
  category: Exclude<Category, "All">;
  format: ProductFormat;
  price: string;
  status: ProductStatus;
  badge: string;
  description: string;
}

const researchDescription = (name: string) =>
  `${name} is supplied as a laboratory research product for scientific research purposes only. Not for human or veterinary use. Not for consumption.`;

export const products: AvelionProduct[] = [
  { id: "aod-5mg", name: "AOD", strength: "5mg", category: "GLP / Metabolic Research", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("AOD") },
  { id: "aod-10mg", name: "AOD", strength: "10mg", category: "GLP / Metabolic Research", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("AOD") },
  { id: "acid-water-10ml", name: "Acid Water", strength: "10ML", category: "Research Supplies", format: "supply", price: "$19", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Acid Water") },
  { id: "bpc-157-5mg", name: "BPC-157", strength: "5mg", category: "Recovery / Repair Research", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("BPC-157") },
  { id: "bpc-157-10mg", name: "BPC-157", strength: "10mg", category: "Recovery / Repair Research", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("BPC-157") },
  { id: "b12-10mg", name: "B12", strength: "10mg", category: "Longevity Research", format: "vial", price: "$79", status: "coming_soon", badge: "Research Use Only", description: researchDescription("B12") },
  { id: "cagrilintide-10mg", name: "Cagrilintide", strength: "10mg", category: "GLP / Metabolic Research", format: "vial", price: "$189", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Cagrilintide") },
  { id: "cjc-ipamorelin-5-10mg", name: "CJC w/ Ipamorelin", strength: "5mg/10mg", category: "Research Peptides", format: "vial", price: "$129", status: "coming_soon", badge: "Research Use Only", description: researchDescription("CJC w/ Ipamorelin") },
  { id: "cjc-no-dac-10mg", name: "CJC NO DAC", strength: "10mg", category: "Research Peptides", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("CJC NO DAC") },
  { id: "dsip-10mg", name: "DSIP", strength: "10mg", category: "Cognitive / Neuro Research", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("DSIP") },
  { id: "epithalon-10mg", name: "Epithalon", strength: "10mg", category: "Longevity Research", format: "vial", price: "$119", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Epithalon") },
  { id: "follistatin-1mg", name: "Follistatin", strength: "1mg", category: "Research Peptides", format: "vial", price: "$149", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Follistatin") },
  { id: "frag-176-191-5mg", name: "Frag 176-191", strength: "5mg", category: "GLP / Metabolic Research", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Frag 176-191") },
  { id: "ghk-cu-50mg", name: "GHK-Cu", strength: "50mg", category: "Longevity Research", format: "vial", price: "$129", status: "coming_soon", badge: "Research Use Only", description: researchDescription("GHK-Cu") },
  { id: "ghrp-2-5mg", name: "GHRP-2", strength: "5mg", category: "Research Peptides", format: "vial", price: "$79", status: "coming_soon", badge: "Research Use Only", description: researchDescription("GHRP-2") },
  { id: "ghrp-6-5mg", name: "GHRP-6", strength: "5mg", category: "Research Peptides", format: "vial", price: "$79", status: "coming_soon", badge: "Research Use Only", description: researchDescription("GHRP-6") },
  { id: "glow-70mg", name: "Glow", strength: "70mg", category: "Research Peptides", format: "vial", price: "$169", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Glow") },
  { id: "gonadorelin-2mg", name: "Gonadorelin", strength: "2mg", category: "Research Peptides", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Gonadorelin") },
  { id: "hexarelin-5mg", name: "Hexarelin", strength: "5mg", category: "Research Peptides", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Hexarelin") },
  { id: "igf-1-1mg", name: "IGF-1", strength: "1mg", category: "Research Peptides", format: "vial", price: "$139", status: "coming_soon", badge: "Research Use Only", description: researchDescription("IGF-1") },
  { id: "ipamorelin-5mg", name: "Ipamorelin", strength: "5mg", category: "Research Peptides", format: "vial", price: "$79", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Ipamorelin") },
  { id: "ipamorelin-10mg", name: "Ipamorelin", strength: "10mg", category: "Research Peptides", format: "vial", price: "$99", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Ipamorelin") },
  { id: "kpv-10mg", name: "KPV", strength: "10mg", category: "Recovery / Repair Research", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("KPV") },
  { id: "kisspeptin-10mg", name: "Kisspeptin", strength: "10mg", category: "Research Peptides", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Kisspeptin") },
  { id: "klow-80mg", name: "Klow", strength: "80mg", category: "Research Peptides", format: "vial", price: "$179", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Klow") },
  { id: "mazdutide-10mg", name: "Mazdutide", strength: "10mg", category: "GLP / Metabolic Research", format: "vial", price: "$199", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Mazdutide") },
  { id: "melanotan-2-10mg", name: "Melanotan 2", strength: "10mg", category: "Research Peptides", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Melanotan 2") },
  { id: "mots-c-10mg", name: "MOTS-C", strength: "10mg", category: "Longevity Research", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("MOTS-C") },
  { id: "mots-c-40mg", name: "MOTS-C", strength: "40mg", category: "Longevity Research", format: "vial", price: "$199", status: "coming_soon", badge: "Research Use Only", description: researchDescription("MOTS-C") },
  { id: "nad-plus-1000mg", name: "NAD+", strength: "1000mg", category: "Longevity Research", format: "vial", price: "$149", status: "coming_soon", badge: "Research Use Only", description: researchDescription("NAD+") },
  { id: "peg-mgf-5mg", name: "PEG MGF", strength: "5mg", category: "Research Peptides", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("PEG MGF") },
  { id: "pt-141-10mg", name: "PT-141", strength: "10mg", category: "Research Peptides", format: "vial", price: "$99", status: "coming_soon", badge: "Research Use Only", description: researchDescription("PT-141") },
  { id: "oxytocin-10mg", name: "Oxytocin", strength: "10mg", category: "Research Peptides", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Oxytocin") },
  { id: "retatrutide-5mg", name: "Retatrutide", strength: "5mg", category: "GLP / Metabolic Research", format: "vial", price: "$149", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Retatrutide") },
  { id: "retatrutide-10mg", name: "Retatrutide", strength: "10mg", category: "GLP / Metabolic Research", format: "vial", price: "$229", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Retatrutide") },
  { id: "retatrutide-20mg", name: "Retatrutide", strength: "20mg", category: "GLP / Metabolic Research", format: "vial", price: "$349", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Retatrutide") },
  { id: "retatrutide-30mg", name: "Retatrutide", strength: "30mg", category: "GLP / Metabolic Research", format: "vial", price: "$449", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Retatrutide") },
  { id: "retatrutide-60mg", name: "Retatrutide", strength: "60mg", category: "GLP / Metabolic Research", format: "vial", price: "$799", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Retatrutide") },
  { id: "selank-10mg", name: "Selank", strength: "10mg", category: "Cognitive / Neuro Research", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Selank") },
  { id: "semaglutide-kit", name: "Semaglutide Kit", strength: "2mg x 5 bottles / 10mg total", category: "GLP / Metabolic Research", format: "vial", price: "$249", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Semaglutide Kit") },
  { id: "semaglutide-10mg", name: "Semaglutide", strength: "10mg", category: "GLP / Metabolic Research", format: "vial", price: "$179", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Semaglutide") },
  { id: "semaglutide-20mg", name: "Semaglutide", strength: "20mg", category: "GLP / Metabolic Research", format: "vial", price: "$299", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Semaglutide") },
  { id: "semaglutide-30mg", name: "Semaglutide", strength: "30mg", category: "GLP / Metabolic Research", format: "vial", price: "$399", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Semaglutide") },
  { id: "semax-10mg", name: "Semax", strength: "10mg", category: "Cognitive / Neuro Research", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Semax") },
  { id: "sermorelin-5mg", name: "Sermorelin", strength: "5mg", category: "Research Peptides", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Sermorelin") },
  { id: "sermorelin-10mg", name: "Sermorelin", strength: "10mg", category: "Research Peptides", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Sermorelin") },
  { id: "slu-pp-322-5mg", name: "Slu-PP-322", strength: "5mg", category: "Longevity Research", format: "vial", price: "$99", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Slu-PP-322") },
  { id: "slu-pp-322-10mg", name: "Slu-PP-322", strength: "10mg", category: "Longevity Research", format: "vial", price: "$129", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Slu-PP-322") },
  { id: "ss-31-50mg", name: "SS-31", strength: "50mg", category: "Longevity Research", format: "vial", price: "$169", status: "coming_soon", badge: "Research Use Only", description: researchDescription("SS-31") },
  { id: "survodutide-10mg", name: "Survodutide", strength: "10mg", category: "GLP / Metabolic Research", format: "vial", price: "$199", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Survodutide") },
  { id: "tb-500-5mg", name: "TB-500", strength: "5mg", category: "Recovery / Repair Research", format: "vial", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("TB-500") },
  { id: "tb-500-10mg", name: "TB-500", strength: "10mg", category: "Recovery / Repair Research", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("TB-500") },
  { id: "tb-500-bpc-157-20mg", name: "TB-500 + BPC-157", strength: "20mg total", category: "Recovery / Repair Research", format: "vial", price: "$189", status: "coming_soon", badge: "Research Use Only", description: researchDescription("TB-500 + BPC-157") },
  { id: "tesamorelin-5mg", name: "Tesamorelin", strength: "5mg", category: "Research Peptides", format: "vial", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Tesamorelin") },
  { id: "tesamorelin-10mg", name: "Tesamorelin", strength: "10mg", category: "Research Peptides", format: "vial", price: "$129", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Tesamorelin") },
  { id: "tirzepatide-10mg", name: "Tirzepatide", strength: "10mg", category: "GLP / Metabolic Research", format: "vial", price: "$199", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Tirzepatide") },
  { id: "tirzepatide-30mg", name: "Tirzepatide", strength: "30mg", category: "GLP / Metabolic Research", format: "vial", price: "$449", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Tirzepatide") },
  { id: "tirzepatide-60mg", name: "Tirzepatide", strength: "60mg", category: "GLP / Metabolic Research", format: "vial", price: "$799", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Tirzepatide") },
  { id: "thymosin-alpha-1-10mg", name: "Thymosin Alpha-1", strength: "10mg", category: "Longevity Research", format: "vial", price: "$129", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Thymosin Alpha-1") },
  { id: "vesugen-20mg", name: "Vesugen", strength: "20mg", category: "Longevity Research", format: "vial", price: "$149", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Vesugen") },
  { id: "5-amino-1mq-injectable-50mg", name: "5-Amino-1MQ Injectable", strength: "50mg", category: "Longevity Research", format: "vial", price: "$139", status: "coming_soon", badge: "Research Use Only", description: researchDescription("5-Amino-1MQ Injectable") },
  { id: "bac-water-10ml", name: "BAC Water", strength: "10ML", category: "Research Supplies", format: "supply", price: "$19", status: "coming_soon", badge: "Research Use Only", description: researchDescription("BAC Water") },
  { id: "lipo-blend-mic-plus-216mg", name: "Lipo Blend MIC Plus", strength: "216mg", category: "GLP / Metabolic Research", format: "vial", price: "$149", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Lipo Blend MIC Plus") },
  { id: "nad-plus-1000mg-in-stock", name: "NAD+", strength: "1000mg", category: "Longevity Research", format: "vial", price: "$149", status: "available", badge: "In Stock", description: researchDescription("NAD+") },
  { id: "l-glutathione-1500mg", name: "L-Glutathione", strength: "1500mg / 10ml", category: "Longevity Research", format: "vial", price: "$129", status: "coming_soon", badge: "Research Use Only", description: researchDescription("L-Glutathione") },
  { id: "semaglutide-oral-3mg", name: "Semaglutide Oral", strength: "3mg 30ct", category: "Oral Research Products", format: "oral", price: "$179", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Semaglutide Oral") },
  { id: "tesofensine-500mcg", name: "Tesofensine", strength: "500mcg 50ct", category: "Oral Research Products", format: "oral", price: "$149", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Tesofensine") },
  { id: "tirzepatide-oral-4mg", name: "Tirzepatide Oral", strength: "4mg 30ct", category: "Oral Research Products", format: "oral", price: "$199", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Tirzepatide Oral") },
  { id: "wolverine-stack", name: "Wolverine Stack", strength: "TB-500 800mcg + BPC-157 500mcg 30ct", category: "Oral Research Products", format: "oral", price: "$169", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Wolverine Stack") },
  { id: "5-amino-1mq-oral-50mg", name: "5-Amino-1MQ Oral", strength: "50mg 50ct", category: "Oral Research Products", format: "oral", price: "$129", status: "coming_soon", badge: "Research Use Only", description: researchDescription("5-Amino-1MQ Oral") },
  { id: "slupp-332-pills-1mg", name: "Slupp-332 Pills", strength: "1mg 60ct", category: "Oral Research Products", format: "oral", price: "$119", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Slupp-332 Pills") },
  { id: "slupp-322-pills-500mcg", name: "Slupp-322 Pills", strength: "500mcg 60ct", category: "Oral Research Products", format: "oral", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Slupp-322 Pills") },
  { id: "slupp-322-pills-250mcg", name: "Slupp-322 Pills", strength: "250mcg 60ct", category: "Oral Research Products", format: "oral", price: "$99", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Slupp-322 Pills") },
  { id: "methyl-blue-20mg", name: "Methyl Blue", strength: "20mg 50ct", category: "Oral Research Products", format: "oral", price: "$89", status: "coming_soon", badge: "Research Use Only", description: researchDescription("Methyl Blue") },
  { id: "bpc-157-oral-500mcg", name: "BPC-157 Oral", strength: "500mcg 30ct", category: "Oral Research Products", format: "oral", price: "$109", status: "coming_soon", badge: "Research Use Only", description: researchDescription("BPC-157 Oral") },
  { id: "accutane-10mg", name: "Accutane", strength: "10mg 50ct", category: "Oral Research Products", format: "oral", price: "$149", status: "restricted", badge: "Restricted", description: researchDescription("Accutane") },
];

export const publicProducts = products.filter((p) => p.status !== "restricted");

export function getProductById(id: string): AvelionProduct | undefined {
  return products.find((p) => p.id === id);
}
