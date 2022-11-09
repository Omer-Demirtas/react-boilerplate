
# Forms

## Libraries

* React Hook Form
* Formik

## React Hook Form

### usage: 

```
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = (data) => console.log(data);
```
```
<form onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue="" {...register("username")} />
</form>
```

### Validation 
Simple validation way:
```
<input defaultValue="" {...register("username", { required: true })} />
```
Other validation parameters:

* required
* min
* max
* minLength
* maxLength
* pattern
* validate

### Working with schema 

Install yup and its resolver library;

```
npm i @hookform/resolvers
npm i yup
```

### Define Schema:
```
const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();
```

### Use the Schema:

```
... = useForm({
    resolver: yupResolver(schema)
});
```

### Working with UI components. 

MUI needs initial values. 

```
... = useForm({ 
  defaultValues: {
    email: ""
  }
});
```



Define Textfield for MUI
```
<Controller
  name={"email"}
  control={control}
  render={({ field: { onChange, value } }) => (
    <TextField onChange={onChange} value={value} label={"Email"} />
  )}
/>
```