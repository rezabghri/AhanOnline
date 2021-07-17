import { Input, Button, Space } from "antd";
import {Formik,ErrorMessage,Form,Field, useFormik} from 'formik';
import * as Yup from 'yup';

const FormItem = Form.Item;

interface IForm {
  username: string;
  password: string;
}

export default function FormikTest() {
  // TODO: make form work with formik , pass handleSubmit to onSubmit of formik
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial


  const SignupSchema=Yup.object().shape({
    username:Yup.string().required(),
    password:Yup.string().required()
  })

  const handleSubmit = (values: IForm) => {
    console.log(values);

  };

  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <Formik 
        initialValues={{
          username:'',
          password:''
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
  
      <form id="form">
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Username" name="username">
          <Input />
          <ErrorMessage name="username" />
        </FormItem>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Password" name="password">
          <Input/>
          <ErrorMessage name="password" /> 
        </FormItem>
        <Space>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
          <Button htmlType="reset"
            onClick={()=>{
              // TODO: reset form with formik
              resetForm
            }}
          >
            reset
          </Button>
        </Space>
      </form>
      </Formik>
    </div>
  );
}
