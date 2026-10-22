import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mololuwa Ajiteru",
    title: "Data Analyst & Business Analyst",
    location: "Lagos, Nigeria",
    phone: "+234 807 243 7964",
    email: "ajiterumololuwa@gmail.com",
    linkedin: "https://linkedin.com/in/mololuwa-ajiteru-a574483bb",
  },
  summary:
    "Data Analyst and Business Analyst with hands-on project experience since 2023 and a B.Sc. in Computer Science (2026). Skilled at turning messy real-world data into clear, actionable insights that improve decisions, revenue, and operations. Experienced in the full analytics lifecycle — requirements gathering, data cleaning, analysis, visualization, and stakeholder communication. Proven ability to deliver measurable impact for e-commerce, logistics, retail, and fintech clients across Nigeria.",
  experience: [
    {
      title: "Freelance Data Analyst & Business Analyst",
      company: "Independent Projects & Client Work",
      location: "Lagos, Nigeria",
      period: "January 2023 – Present",
      description:
        "Since 2023, while completing my degree, I have independently delivered analytics and business analysis projects for Nigerian startups and SMEs across e-commerce, logistics, education, and fintech.",
      achievements: [
        "Partnered with 8+ clients; gathered business requirements and translated them into clear data solutions and dashboards",
        "Built automated Power BI dashboards that reduced manual reporting time by 70% for a logistics company",
        "Conducted customer segmentation and cohort analysis for an e-commerce brand, contributing to a 22% increase in repeat purchase rate",
        "Designed Python data-cleaning pipelines that improved data completeness from 61% to 96% on a fintech dataset of 1.2M+ rows",
        "Regularly presented insights to non-technical stakeholders with strong feedback on clarity and actionability",
      ],
    },
  ],
  projects: [
    {
      slug: "ecommerce-retention",
      title: "E-commerce Customer Retention & Segmentation Dashboard",
      year: "2024",
      tools: ["Power BI", "SQL", "Python"],
      overview:
        "Analyzed 180,000+ transactions using RFM segmentation and cohort analysis to understand customer behavior and improve retention strategies.",
      problem:
        "The e-commerce client was experiencing declining customer retention rates and lacked visibility into customer segments and retention patterns. They needed actionable insights to improve their retention strategy.",
      process:
        "Conducted RFM (Recency, Frequency, Monetary) segmentation on 180,000+ transactions. Built cohort analysis to track customer retention over time. Created interactive Power BI dashboard with retention curves and segment visualizations.",
      solution:
        "Delivered an interactive Power BI dashboard with customer segments, retention curves, and actionable recommendations. Identified that referral customers had 2.4× higher 6-month retention compared to other acquisition channels.",
      results:
        "Client saw an 18% improvement in 90-day retention after implementing the recommended retention strategies. The dashboard is now used weekly for monitoring and strategic planning.",
      keyTakeaways:
        "Customer segmentation combined with cohort analysis provides powerful insights for retention strategies. Referral programs can significantly improve long-term customer value.",
    },
    {
      slug: "logistics-operations",
      title: "Logistics Operations Performance Dashboard",
      year: "2024",
      tools: ["Power BI", "Excel (Power Query)", "SQL"],
      overview:
        "Designed and built a real-time operations dashboard tracking delivery performance across 12 active routes and 4,800+ monthly deliveries.",
      problem:
        "A logistics company was struggling with delayed deliveries and high operational costs. They lacked real-time visibility into route performance and couldn't identify bottlenecks in their delivery network.",
      process:
        "Analyzed delivery data across 12 active routes. Built Power BI dashboard tracking on-time delivery rate, average delivery time, cost-per-delivery, and route performance. Used Power Query for data cleaning and transformation.",
      solution:
        "Delivered a real-time operations dashboard with automated data refresh. Identified three bottleneck routes that accounted for 41% of all delayed deliveries and 28% of total delivery costs. Recommended route optimizations and process changes.",
      results:
        "After implementing recommendations: On-time delivery rate improved from 71% to 89%. Average delivery delay reduced by 27% (from 4.8 hours to 3.5 hours). Cost-per-delivery decreased by 14% within two months. Reporting time reduced from 12 hours to under 2 hours (83% reduction).",
      keyTakeaways:
        "Real-time operational dashboards enable quick identification of bottlenecks. Small route optimizations can have significant impact on overall performance and costs.",
    },
    {
      slug: "retail-inventory",
      title: "Retail Sales Performance & Inventory Optimization",
      year: "2023–2024",
      tools: ["Python", "Power BI", "Excel"],
      overview:
        "Cleaned multi-year sales data and applied ABC inventory classification to optimize inventory management and free up working capital.",
      problem:
        "A retail client was holding excessive inventory of low-performing products while frequently stocking out of high-demand items. This tied up significant working capital and lost sales opportunities.",
      process:
        "Cleaned and analyzed multi-year sales data. Applied ABC inventory classification to categorize products by revenue contribution. Used Python for data cleaning and Power BI for visualization.",
      solution:
        "Delivered prioritized inventory recommendations based on ABC analysis. Identified that 22% of SKUs generated only 4% of revenue while tying up significant capital. Created dashboards for ongoing inventory monitoring.",
      results:
        "Client implemented inventory recommendations that helped free up working capital. Optimized stock levels for high-performing products while reducing inventory of low-performing SKUs.",
      keyTakeaways:
        "ABC inventory analysis is a powerful tool for optimizing working capital. A small percentage of products often contribute disproportionately to revenue (or losses).",
    },
    {
      slug: "fintech-data-quality",
      title: "Fintech Transaction Data Quality & Pattern Exploration",
      year: "2023",
      tools: ["Python", "SQL", "Matplotlib/Seaborn"],
      overview:
        "Explored 1.2 million transaction records, built data cleaning pipelines, and produced visualizations to support fraud investigation rules.",
      problem:
        "A fintech company had a large transaction dataset (1.2M+ records) with significant data quality issues. They needed clean data for fraud detection and pattern analysis.",
      process:
        "Explored 1.2 million transaction records using Python and SQL. Built data cleaning pipeline to handle missing values, duplicates, and inconsistencies. Used Matplotlib and Seaborn for exploratory data analysis and visualization.",
      solution:
        "Built a comprehensive data cleaning pipeline that raised data completeness from 61% to 96%. Produced clear visualizations and statistical summaries to support fraud investigation rules. Documented data quality patterns and recommendations.",
      results:
        "Data completeness improved from 61% to 96%. Visualizations and statistical summaries provided clear insights for fraud investigation team. Pipeline can be reused for ongoing data quality monitoring.",
      keyTakeaways:
        "Data quality is foundational for any analytics work. Investing in robust cleaning pipelines pays dividends in analysis accuracy and stakeholder trust.",
    },
  ],
  skills: {
    technical: [
      "SQL (Advanced)",
      "Python (Pandas, NumPy, Matplotlib, Seaborn)",
      "Power BI",
      "Tableau",
      "Excel & Google Sheets (Power Query, Pivot Tables)",
      "Data Cleaning & ETL",
      "Statistical Analysis",
      "A/B Testing",
    ],
    business: [
      "Requirements Gathering",
      "Process Mapping",
      "Stakeholder Management",
      "Problem Framing",
      "Data Storytelling",
    ],
    tools: [
      "Power BI",
      "Tableau",
      "Excel",
      "Google Sheets",
      "SQL",
      "Python",
      "Jupyter",
      "Git",
      "Looker Studio",
    ],
  },
  education: [
    {
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      institution: "Federal University Oye-Ekiti, Nigeria",
      location: "Oye-Ekiti, Nigeria",
      graduated: "2026",
    },
  ],
  certifications: [
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
    },
    {
      name: "IBM Data Analyst Professional Certificate",
      issuer: "Coursera",
    },
    {
      name: "Meta Data Analyst Professional Certificate",
      issuer: "Coursera",
    },
    {
      name: "Google Business Intelligence Professional Certificate",
      issuer: "Coursera",
    },
    {
      name: "Business Analysis Fundamentals",
      issuer: "Coursera",
    },
    {
      name: "SQL for Data Science",
      issuer: "Coursera",
    },
    {
      name: "Excel Skills for Business Specialization",
      issuer: "Coursera",
    },
    {
      name: "Data Visualization with Python",
      issuer: "Coursera",
    },
    {
      name: "Data Analysis for Business",
      issuer: "edX (Microsoft)",
    },
    {
      name: "IBM Data Analytics with Excel and R",
      issuer: "Coursera",
    },
  ],
};
