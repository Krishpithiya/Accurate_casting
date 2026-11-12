export interface ProductItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const productsData: ProductItem[] = [
  {
    id: 1,
    title: 'PUMPS',
    category: 'Industrial',
    image: '/images/p_1.jpg',
    description:
      'Precision investment cast pump components, impellers, and casing assemblies designed for high durability and fluid dynamics efficiency.',
  },
  {
    id: 2,
    title: 'AGRICULTURE',
    category: 'Heavy Equipment',
    image: '/images/p_2.jpg',
    description:
      'Robust casting parts for tractors, tillage equipment, harvesters, and irrigation systems engineered to withstand rigorous outdoor environments.',
  },
  {
    id: 3,
    title: 'EARTH MOVING COMPONENTS',
    category: 'Mining & Construction',
    image: '/images/p_3.jpg',
    description:
      'Heavy-duty wear parts, bucket teeth, brackets, and structural links built from high tensile alloy steels for extreme operating conditions.',
  },
  {
    id: 4,
    title: 'HARDWARE',
    category: 'Architecture & Industrial',
    image: '/images/p_4.jpg',
    description:
      'High-tolerance architectural hardware, heavy-duty hinges, handles, security latches, and structural fittings in premium stainless steel.',
  },
  {
    id: 5,
    title: 'AUTOMOBILES',
    category: 'Automotive',
    image: '/images/p_5.jpg',
    description:
      'Complex automotive drivetrain, suspension, steering knuckles, and brake system castings manufactured to exact OEM tolerances.',
  },
  {
    id: 6,
    title: 'FOOD PROCESSING',
    category: 'Sanitary & Food Grade',
    image: '/images/p_6.jpg',
    description:
      'Austenitic stainless steel castings (CF8M/316) offering flawless surface finish, hygiene compliance, and superior corrosion resistance.',
  },
  {
    id: 7,
    title: 'SURGICAL IMPLANTS',
    category: 'Medical & Healthcare',
    image: '/images/p_7.jpg',
    description:
      'Ultra-precision medical and surgical device components made under stringent dimensional control and metallurgical purity.',
  },
  {
    id: 8,
    title: 'VALVES & PIPING',
    category: 'Fluid Control',
    image: '/images/p_8.jpg',
    description:
      'High-pressure valve bodies, gate, globe, check and ball valve castings tested for hydrostatic integrity and zero porosity.',
  },
  {
    id: 9,
    title: 'GENERAL ENGINEERING',
    category: 'Custom Engineering',
    image: '/images/p_9.jpg',
    description:
      'Custom engineered investment casting components tailored to specific client drawings, alloys, and mechanical requirements.',
  },
];
