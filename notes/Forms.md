
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