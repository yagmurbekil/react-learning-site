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
    title: 'Temel React',
    topics: [
      {
        id: 'react-nedir',
        categoryId: 'core',
        title: 'React Nedir?',
        description: 'Kullanıcı arayüzleri oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir.',
        analogy: 'React, bir evin odalarını (component) ayrı ayrı inşa edip sonra birleştirmeye benzer.',
        code: `import React from 'react';\n\nfunction App() {\n  return <h1>Merhaba, React!</h1>;\n}\n\nexport default App;`,
        codeExplanation: 'Burada basit bir React bileşeni oluşturuyoruz. Bir fonksiyon tanımlayıp, geriye JSX döndürüyoruz.'
      },
      {
        id: 'components',
        categoryId: 'core',
        title: 'Component Mantığı',
        description: 'Uygulamayı küçük, tekrar kullanılabilir parçalara bölmektir.',
        analogy: 'Lego parçaları gibidir. Küçük parçaları birleştirip büyük bir şato yaparsınız.',
        code: `function Header() { return <header>Başlık</header>; }\nfunction Footer() { return <footer>Alt Bilgi</footer>; }\n\nexport default function App() {\n  return (\n    <div>\n      <Header />\n      <main>İçerik</main>\n      <Footer />\n    </div>\n  );\n}`,
        codeExplanation: 'Header ve Footer adında iki ayrı bileşen oluşturulup App bileşeni içerisinde çağrılmıştır.'
      },
      {
        id: 'jsx-tsx',
        categoryId: 'core',
        title: 'JSX ve TSX',
        description: 'JavaScript (veya TypeScript) içinde HTML benzeri sözdizimi yazmanızı sağlar.',
        analogy: 'HTML ve JavaScript\'in evliliğidir. Birbirinin en iyi özelliklerini alırlar.',
        code: `const name = "Ahmet";\nconst element = <h1>Merhaba, {name}!</h1>;`,
        codeExplanation: 'Süslü parantezler {} içerisine herhangi bir geçerli JavaScript ifadesi yazılabilir.'
      },
      {
        id: 'props',
        categoryId: 'core',
        title: 'Props',
        description: 'Bileşenler arası veri aktarımını sağlar. Yukarıdan aşağıya tek yönlüdür.',
        analogy: 'Bir kargocunun paketi (veriyi) alıcıya (alt bileşene) ulaştırması gibidir.',
        code: `function Greeting(props: { name: string }) {\n  return <h1>Merhaba, {props.name}</h1>;\n}\n\nexport default function App() {\n  return <Greeting name="Ayşe" />;\n}`,
        codeExplanation: 'App bileşeni Greeting bileşenine name özelliğini gönderir.'
      },
      {
        id: 'state',
        categoryId: 'core',
        title: 'State ve useState',
        description: 'Bileşen içindeki değişebilen verileri yönetmek için kullanılır.',
        analogy: 'State, bir insanın ruh halidir. Dışarıdan bir etki ile değişebilir ve kişinin davranışlarını etkiler.',
        code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Tıklama sayısı: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Arttır</button>\n    </div>\n  );\n}`,
        codeExplanation: 'useState hook\'u bir state değişkeni (count) ve onu güncellemek için bir fonksiyon (setCount) döner.',
        demoId: 'state-demo'
      },
      {
        id: 'event-handling',
        categoryId: 'core',
        title: 'Event Handling',
        description: 'Kullanıcı etkileşimlerini (tıklama, yazma vb.) yakalamak için kullanılır.',
        analogy: 'Bir sensör gibidir. Biri kapıdan geçtiğinde (event) alarmı çalıştırır.',
        code: `function ActionButton() {\n  function handleClick() {\n    alert('Butona tıklandı!');\n  }\n  return <button onClick={handleClick}>Bana Tıkla</button>;\n}`,
        codeExplanation: 'onClick özelliği ile butona tıklanma anında çalışacak fonksiyon belirlenmiştir.'
      },
      {
        id: 'conditional-rendering',
        categoryId: 'core',
        title: 'Conditional Rendering',
        description: 'Belirli koşullara göre farklı bileşenlerin veya içeriklerin gösterilmesidir.',
        analogy: 'Gece ise ay ışığını, gündüz ise güneşi göstermek gibidir.',
        code: `function UserGreeting({ isLoggedIn }: { isLoggedIn: boolean }) {\n  return isLoggedIn ? <h1>Hoş geldiniz!</h1> : <h1>Lütfen giriş yapın.</h1>;\n}`,
        codeExplanation: 'Ternary operatörü (? :) kullanarak duruma göre farklı JSX döndürüyoruz.'
      },
      {
        id: 'list-rendering',
        categoryId: 'core',
        title: 'List Rendering',
        description: 'Dizi içindeki elemanları JSX bileşenlerine dönüştürmek için kullanılır.',
        analogy: 'Bir alışveriş listesindeki her bir maddeyi kağıda tek tek yazmak gibidir.',
        code: `const numbers = [1, 2, 3];\nconst listItems = numbers.map((number) =>\n  <li key={number.toString()}>{number}</li>\n);\n\nreturn <ul>{listItems}</ul>;`,
        codeExplanation: 'map fonksiyonu ile her eleman bir <li> elementine dönüştürülür. key prop\'u performansı artırmak için zorunludur.'
      },
      {
        id: 'use-effect',
        categoryId: 'core',
        title: 'useEffect',
        description: 'Bileşenin yaşam döngüsü olaylarında yan etkileri yönetmek için kullanılır.',
        analogy: 'Odaya girdiğinizde ışığı açmak ve çıktığınızda kapatmak gibidir.',
        code: `import { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [time, setTime] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => setTime(t => t + 1), 1000);\n    return () => clearInterval(interval);\n  }, []);\n\n  return <p>Süre: {time} saniye</p>;\n}`,
        codeExplanation: 'Zamanlayıcı başlatıyoruz. Return ile döndüğümüz fonksiyon bileşen ekrandan kalkınca temizlik yapar.',
        demoId: 'effect-demo'
      },
      {
        id: 'use-context',
        categoryId: 'core',
        title: 'useContext',
        description: 'Bileşen ağacının derinliklerine props geçmeden veri taşımak için kullanılır.',
        analogy: 'Binanın merkezi havalandırma sistemi gibidir. İsteyen her oda oradan hava alabilir.',
        code: `import { createContext, useContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction Display() {\n  const theme = useContext(ThemeContext);\n  return <div>Mevcut tema: {theme}</div>;\n}\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <Display />\n    </ThemeContext.Provider>\n  );\n}`,
        codeExplanation: 'ThemeContext oluşturulup Provider ile sarılıyor. Alt bileşen useContext ile bu veriyi tüketebiliyor.',
        demoId: 'context-demo'
      }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    topics: [
      {
        id: 'interface-type',
        categoryId: 'typescript',
        title: 'Interface ve Type',
        description: 'React bileşenlerine gönderilen propların ve state verilerinin şeklini tanımlar.',
        analogy: 'Bir kargo paketinin üzerinde yazması gereken gönderici, alıcı ve adres gibi zorunlu bilgilerin şablonudur.',
        code: `interface UserProps {\n  name: string;\n  age: number;\n  isAdmin?: boolean;\n}\n\nfunction UserCard({ name, age, isAdmin }: UserProps) {\n  return <div>{name} ({age})</div>;\n}`,
        codeExplanation: 'UserProps interface\'i beklenen verilerin tiplerini tanımlar.'
      },
      {
        id: 'generic-usestate',
        categoryId: 'typescript',
        title: 'Generic useState',
        description: 'State\'in hangi veri tipinde olacağını TypeScript\'e bildirmektir.',
        analogy: 'Bir kutunun sadece elma alabileceğini üzerine etiketle yazmak gibidir.',
        code: `import { useState } from 'react';\n\ninterface User {\n  id: number;\n  name: string;\n}\n\nfunction Profile() {\n  const [user, setUser] = useState<User | null>(null);\n  return <div />\n}`,
        codeExplanation: 'useState<User | null> ile user değişkeninin ya User objesi ya da null olacağını belirtiyoruz.'
      }
    ]
  },
  {
    id: 'router',
    title: 'React Router',
    topics: [
      {
        id: 'routing-basics',
        categoryId: 'router',
        title: 'Temel Yönlendirme',
        description: 'Uygulamanızda sayfalar arası geçişi sayfa yenilenmeden sağlar.',
        analogy: 'Büyük bir kütüphanedeki yön tabelaları gibidir.',
        code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to="/">Ana Sayfa</Link>\n        <Link to="/hakkimizda">Hakkımızda</Link>\n      </nav>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/hakkimizda" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`,
        codeExplanation: 'Link bileşenleri URL\'i değiştirir, Routes ve Route eşleşen URL\'e göre doğru bileşeni gösterir.',
        demoId: 'router-demo'
      }
    ]
  },
  {
    id: 'forms',
    title: 'Form Yönetimi',
    topics: [
      {
        id: 'react-hook-form',
        categoryId: 'forms',
        title: 'React Hook Form & Yup',
        description: 'Form verilerini performanslı yönetmek ve doğrulamak için kullanılır.',
        analogy: 'Formu dolduranları denetleyen ve her şey tamamsa dosyayı teslim eden asistandır.',
        code: `import { useForm } from 'react-hook-form';\n\nfunction LoginForm() {\n  const { register, handleSubmit } = useForm();\n  const onSubmit = data => console.log(data);\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register("email")} />\n      <button type="submit">Giriş Yap</button>\n    </form>\n  );\n}`,
        codeExplanation: 'register inputu forma bağlar, handleSubmit gönderimi yönetir.',
        demoId: 'form-demo'
      }
    ]
  },
  {
    id: 'api',
    title: 'API İstekleri',
    topics: [
      {
        id: 'fetch-axios',
        categoryId: 'api',
        title: 'Axios ve Fetch',
        description: 'Dış kaynaklardan veri almak veya veri göndermek için kullanılır.',
        analogy: 'Restoranda garsona (API) sipariş verip (Request), yemeği (Response) beklemek gibidir.',
        code: `import axios from 'axios';\nimport { useEffect, useState } from 'react';\n\nfunction Users() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    axios.get('https://jsonplaceholder.typicode.com/users')\n      .then(res => setUsers(res.data));\n  }, []);\n\n  return <div>{users.length} kullanıcı bulundu.</div>;\n}`,
        codeExplanation: 'Axios ile HTTP GET isteği atılır ve dönen veri state\'e kaydedilir.'
      }
    ]
  },
  {
    id: 'state-management',
    title: 'State Management',
    topics: [
      {
        id: 'redux-toolkit',
        categoryId: 'state-management',
        title: 'Redux Toolkit',
        description: 'Büyük uygulamalarda merkezi durum (state) yönetimi sağlar.',
        analogy: 'Global bir banka kasası gibidir. Parayı yatırır ve istediğiniz şubeden çekersiniz.',
        code: `import { createSlice } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: state => { state.value += 1 }\n  }\n});`,
        codeExplanation: 'State ve onu güncelleyen reducer fonksiyonları createSlice ile tanımlanır.',
        demoId: 'redux-demo'
      }
    ]
  },
  {
    id: 'data-fetching',
    title: 'Data Fetching',
    topics: [
      {
        id: 'react-query',
        categoryId: 'data-fetching',
        title: 'React Query',
        description: 'Sunucu durumunu (server state) yönetmek, önbelleğe almak (caching) ve senkronize etmek için kullanılır.',
        analogy: 'Size gelen haberleri hafızasında tutan ve yeni haber geldiğinde size ileten zeki bir gazete dağıtıcısıdır.',
        code: `import { useQuery } from '@tanstack/react-query';\n\nfunction App() {\n  const { isPending, error, data } = useQuery({\n    queryKey: ['repoData'],\n    queryFn: () =>\n      fetch('https://api.github.com/repos/TanStack/query').then((res) =>\n        res.json(),\n      ),\n  })\n  \n  if (isPending) return 'Loading...'\n  if (error) return 'An error has occurred: ' + error.message\n  return <div>{data.name}</div>\n}`,
        codeExplanation: 'useQuery hook\'u yükleme, hata ve veri durumlarını otomatik yönetir, veriyi önbelleğe alır.'
      }
    ]
  },
  {
    id: 'optimization',
    title: 'Optimizasyon',
    topics: [
      {
        id: 'use-memo',
        categoryId: 'optimization',
        title: 'useMemo ve useCallback',
        description: 'Gereksiz hesaplamaları ve yeniden çizimleri (re-render) önlemek için kullanılır.',
        analogy: 'Zor bir matematik problemini bir kez çözüp cevabını not etmek ve sorulduğunda tekrar hesaplamadan nottan okumak gibidir.',
        code: `import { useMemo, useState } from 'react';\n\nfunction Calculator({ a, b }) {\n  const [count, setCount] = useState(0);\n  \n  // Sadece a veya b değiştiğinde hesaplanır\n  const expensiveResult = useMemo(() => {\n    let sum = 0;\n    for (let i = 0; i < 100000000; i++) sum += a * b;\n    return sum;\n  }, [a, b]);\n\n  return <div>Sonuç: {expensiveResult}</div>;\n}`,
        codeExplanation: 'useMemo, yoğun hesaplamaların bileşen her render edildiğinde baştan yapılmasını engeller.'
      }
    ]
  }
];