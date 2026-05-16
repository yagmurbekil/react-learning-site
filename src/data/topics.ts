export interface Topic {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  analogy: string;
  code: string;
  codeExplanation: string;
  demoId?: string;
}

export interface Category {
  id: string;
  title: string;
  topics: Topic[];
}

export const topicsData: Category[] = [
  {
    id: 'core',
    title: 'Mimari Temeller',
    topics: [
      {
        id: 'react-nedir',
        categoryId: 'core',
        title: 'React Mimarisi',
        description: 'Kullanıcı arayüzleri oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. Virtual DOM mantığıyla çalışır.',
        analogy: 'Geleneksel web sitelerinde her değişiklikte tüm sayfa yeniden çizilir. React ise sadece değişen yeri tespit edip orayı günceller, bu da yüksek performans sağlar.',
        code: `import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Sistem Durumu</h1>
      <MetricsPanel />
    </div>
  );
}

export default Dashboard;`,
        codeExplanation: 'Bileşen (Component) tabanlı mimarinin temel taşıdır. Her parça kendi içinde izoledir.'
      },
      {
        id: 'state',
        categoryId: 'core',
        title: 'State Yönetimi (useState)',
        description: 'Bileşen içindeki değişebilen verileri (kullanıcı girdisi, UI durumları) yönetmek için kullanılır.',
        analogy: 'Uygulamanın kısa süreli hafızasıdır. Kullanıcının hangi sekmede olduğunu veya sepetteki ürün miktarını hatırlar.',
        code: `import { useState } from 'react';

function ProductCard() {
  const [qty, setQty] = useState(1);

  return (
    <div>
      <span>Adet: {qty}</span>
      <button onClick={() => setQty(q => q + 1)}>Arttır</button>
    </div>
  );
}`,
        codeExplanation: 'React bu değişken (qty) güncellendiğinde UI\'ı otomatik olarak senkronize eder.',
        demoId: 'state-demo'
      },
      {
        id: 'use-effect',
        categoryId: 'core',
        title: 'Side Effects (useEffect)',
        description: 'Bileşenin yaşam döngüsü olaylarında dış dünyayla iletişimi (API istekleri, abonelikler) yönetmek için kullanılır.',
        analogy: 'useEffect, bir bileşen ekrana çizildikten hemen sonra arka planda çalışan bir görev yöneticisidir.',
        code: `import { useState, useEffect } from 'react';

function UserData({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${id}\`).then(res => res.json()).then(setData);
    
    // Cleanup function
    return () => console.log('Component unmounted');
  }, [id]);

  return <div>{data?.name}</div>;
}`,
        codeExplanation: 'Dependency array [id] içindeki değer değiştiğinde veya bileşen ilk yüklendiğinde içindeki kod çalışır.',
        demoId: 'effect-demo'
      },
      {
        id: 'use-context',
        categoryId: 'core',
        title: 'Global Veri (useContext)',
        description: 'Bileşen ağacının derinliklerine props geçmeden (prop drilling) veri taşımak için kullanılır.',
        analogy: 'Uygulamanın elektrik şebekesidir. Her bileşen direkt olarak prize takılıp elektriği (veriyi) çekebilir.',
        code: `import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

function Profile() {
  const user = useContext(AuthContext);
  return <div>{user.name}</div>;
}`,
        codeExplanation: 'Tema, dil seçimi veya oturum verileri gibi tüm uygulamanın erişmesi gereken veriler için idealdir.',
        demoId: 'context-demo'
      }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript Entegrasyonu',
    topics: [
      {
        id: 'interface-type',
        categoryId: 'typescript',
        title: 'Veri Modelleri (Interface)',
        description: 'Büyük ölçekli uygulamalarda backend\'den gelen verilerin ve component proplarının tip güvenliğini sağlar.',
        analogy: 'Bir API\'nin size vereceği verinin kesin bir sözleşmesidir. Hata yapmanızı kod yazarken engeller.',
        code: `// API Response Modeli
export interface Order {
  id: string;
  totalAmount: number;
  status: 'PENDING' | 'SHIPPED' | 'DELIVERED'; // Union Types
  customer?: Customer; // Optional Field
}

export interface OrderCardProps {
  order: Order;
  onSelect: (id: string) => void;
}

function OrderCard({ order, onSelect }: OrderCardProps) {
  return (
    <div onClick={() => onSelect(order.id)}>
      Sipariş: {order.id} - Durum: {order.status}
    </div>
  );
}`,
        codeExplanation: 'OrderCard bileşeni sadece Order tipine uygun verileri kabul edebilir. Aksi halde derleme hatası verir.'
      },
      {
        id: 'generic-usestate',
        categoryId: 'typescript',
        title: 'Generics ve Hooks',
        description: 'State\'in hangi veri tipinde olacağını TypeScript\'e bildirmektir.',
        analogy: 'Generic tipler, içine ne koyacağınızı sizin belirlediğiniz akıllı konteynerlerdir.',
        code: `import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

function ProductList() {
  // Başlangıçta boş dizi ama tipi Product[]
  const [products, setProducts] = useState<Product[]>([]);
  
  // Başlangıçta null ama tipi Product
  const [selected, setSelected] = useState<Product | null>(null);

  return <div />;
}`,
        codeExplanation: 'useState içerisine generic <Type> verilerek null veya farklı tip hatalarının önüne geçilir.'
      }
    ]
  },
  {
    id: 'router',
    title: 'Uygulama Yönlendirmesi',
    topics: [
      {
        id: 'routing-basics',
        categoryId: 'router',
        title: 'React Router',
        description: 'Modern SPA (Single Page Application) mimarisinde sayfa yenilenmeden geçişleri yönetir.',
        analogy: 'Uygulamanın navigasyon sistemidir. Adres çubuğundaki URL değişse bile uygulama yeniden yüklenmez, sadece ekrandaki bileşenler değişir.',
        code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users/:id" element={<UserProfile />} /> // Dynamic Route
      </Routes>
    </BrowserRouter>
  );
}`,
        codeExplanation: 'Routes içindeki her Route belirli bir URL yoluyla eşleşir ve ilgili componenti render eder.',
        demoId: 'router-demo'
      }
    ]
  },
  {
    id: 'forms',
    title: 'Gelişmiş Formlar',
    topics: [
      {
        id: 'react-hook-form',
        categoryId: 'forms',
        title: 'Performanslı Formlar',
        description: 'Gereksiz re-render ları engelleyerek büyük formları performanslı yönetir. Yup ile kusursuz validasyon sunar.',
        analogy: 'Formu doldururken her tuşa basışta tüm sayfayı dondurmayan, sadece en son gönder butonunda hataları hızlıca bildiren bir yapıdır.',
        code: `import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
});`,
        codeExplanation: 'Schema bazlı validasyon sayesinde çok karmaşık doğrulama kuralları kolayca yazılır.',
        demoId: 'form-demo'
      }
    ]
  },
  {
    id: 'state-management',
    title: 'Global State',
    topics: [
      {
        id: 'redux-toolkit',
        categoryId: 'state-management',
        title: 'Redux Toolkit',
        description: 'Büyük ve karmaşık kurumsal uygulamalarda merkezi durum (state) yönetimi sağlar.',
        analogy: 'Uygulamanın ana beynidir. Tüm bileşenler veriyi bu merkezi beyinden okur ve güncellemeleri beyne bildirir.',
        code: `import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});`,
        codeExplanation: 'createSlice, boilerplate kodu (tekrarlayan kalıpları) en aza indirerek Redux\'ı modern ve temiz bir hale getirir.',
        demoId: 'redux-demo'
      }
    ]
  }
];