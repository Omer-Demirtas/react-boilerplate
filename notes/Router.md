
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

