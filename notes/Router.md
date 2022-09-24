
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
