import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useBookStore } from "stores/BookStores";
import * as yup from "yup";

const bookSelector = (state) => state.books;

const Books = () => {
  console.log("Book  Render");

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "70%" }}>
        <Actions />
        <BookList />
        <Comments />
      </div>
      <div style={{ width: "30%", borderLeft: "1px solid black", padding: 8 }}>
        <Form />
        <HookForm />
      </div>
    </div>
  );
};

const validationSchema = yup.object({
  name: yup.string("Enter book name").required("book name is required"),
  autor: yup.string("Enter autor name").required("autor name is required"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      autor: "",
      age: "0",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log("Form Render");

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={1}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="autor"
          name="autor"
          label="autor"
          value={formik.values.autor}
          onChange={formik.handleChange}
          error={formik.touched.autor && Boolean(formik.errors.autor)}
          helperText={formik.touched.autor && formik.errors.autor}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={formik.values.age}
            id="age"
            name="age"
            label="Age"
            onChange={formik.handleChange}
          >
            {Array.apply(null, Array(1000))
              .map(function (x, i) {
                return i;
              })
              .map((e) => (
                <MenuItem key={e} value={e}>
                  {e}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

const HookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log("HOOK FORM RENDER", errors);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div style={{ marginTop: 20 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="" {...register("username")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

const Actions = () => {
  const count = useBookStore((s) => s.count);
  const inc = useBookStore((s) => s.inc);

  const addBook = useBookStore((s) => s.addBook);
  const getComments = useBookStore((s) => s.getCommentsByBookId);

  console.log("Actions Render");

  return (
    <div style={{ display: "flex", justifyContent: "end", padding: 8, gap: 8 }}>
      <button onClick={() => inc()}>Inc {count}</button>
      <button onClick={() => addBook({ name: "asd", section: "asd" })}>
        ADD new one
      </button>
      <button onClick={() => getComments(1)}>Get Comments</button>
    </div>
  );
};

const BookList = () => {
  const books = useBookStore(bookSelector);

  console.log("Book List Render");

  return (
    <div
      style={{
        display: "flex",
        marginTop: 16,
        justifyContent: "space-around",
      }}
    >
      {books.map((b) => (
        <Book key={b.id} book={b} />
      ))}
    </div>
  );
};

const Comments = () => {
  const comments = useBookStore((state) => state.comments);

  console.log("Comments Render");

  return (
    <div
      style={{
        margin: 16,
      }}
    >
      {comments.splice(0, 10).map((c) => (
        <div key={c.id}>
          <h5>{c.name}</h5>
          <h6>{c.body}</h6>
        </div>
      ))}
    </div>
  );
};

const Book = ({ book }) => {
  return (
    <div
      style={{
        width: 148.5,
        height: 210,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        padding: 8,
      }}
    >
      <NavLink to={`details/${book.id}`}>{book.name}</NavLink>
      <h6>{book.section}</h6>
    </div>
  );
};

export default Books;
