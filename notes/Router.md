
# Router

## Nested Pages
to use nest page like 
```
<Route path="/" element={<App />}>
    <Route path="home" element={<Home />} />
    <Route path="*" element={<h1>Not Found</h1>} />
</Route>
```
we need to render an Outlet in the App.jsx "parent" route.
```
<>
    <Header />
    <Outlet />
</>
```

### Nested Routes mantığı üzerine 
Bir sayfa kendi içinde alt değişken parçalara bölündüğünde kullanışlı oluyor. 
End dışta genel olarak kullanılan path e bir Loyut component i oluşturarak verilebilir. 
BookLayout örnek olarak incelenebilir. 

O pathe default Layout harici bir component render edilmek istenirse. Örneğin /book adresinde kitaplar listelensin istenirse. 
```
<Route index element={<Books />}>
```
Şeklinde index props u eklenerek yapılabilir.

### Generic Page Template

```src/pages``` altında içerisinden birden fazla sayfa barındıran yani nested routes düzeni:

```src/pages/book```
* Layout
* Books
* BookDetails

Her nested sayfa bir Layout içermeli. Bu component ```<Outlet />``` o sayfada içermeli ve altındaki her routes da görünmesini istenilen componentleri barındırmalı. Örneğin Hedaerın tüm sayfalarda görünmesi için tüm uygulamayı / path i ile sarmalladık ve bunun Layoutunda Header render ettik.

### Use Params 
Sayfalarda url ile geçirilen parametreleri almak için kullandığımız hook. Routeda ```/book/:id``` şeklinde tanımlanır. 
```const { id } = useParams();``` Şeklinde direkt olarak pathde tanımlanan değişken isminde alınabilir.  

### Navigate Component and useNavigate();
Her ikiside uygulama içinde path değiştirmek için kullanılıyor. 
Component olarak kullanımı genel olarak PrivateRoutes da kullanıldığı gibi bir JSX elementi dönülmesi gerektiği zaman, Hook oalrak ise bir fonksiyon içinde kullanılması gerektiği zaman kullanılabilir. 

### Use Routes 
Component olarak yazdığımız Route yapısını JSON fromatında yazmamızı sağlar. 
```
[
    {
        path: "/",
        element: <Layout />
        children: [{...}],
    }
]
```
şeklinde bir obje oluşturarak kullanılır.