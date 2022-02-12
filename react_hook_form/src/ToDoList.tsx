import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { errorSelector } from "recoil";
import { isNativeError } from "util/types";

// function ToDoList () {
//     const [toDo, setToDo] = useState("")
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget : {value}, 
//         } = event;
//         setToDo(value);
//     };
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(toDo);
//     };
//     // 앞서 작성한 코드들은 reac-hook-form에서는 한 줄의 코드로 가능하게 해준다.
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

interface IForm {
    email?: string;
    id: string;
    password?: string;
    password2?:string;
}

function ToDoList(){
    // register 함수를 사용하게되면 기존에 사용했던 onChange 이벤트 핸들러가 필요없게된다.
    // watch는 form의 입력 값들의 변화를 관찰 할 수 있게 해주는 함수이다.
    // handleSubmit은 우리가 작성한 코드가 진행될 수 있게 해준다.
    // html Input 타입인 required와 minLength로도 가능하지만 자바스크립트만으로도 가능하다 { required: true, minLength: 10 }
    // formState를 통해 앞에 넣었던 패턴들에 대해 오류가 있을경우 message를 남겨줄 수 있다.
    // shouldFocus는 에러가 발생한 곳으로 커서가 이동하게된다.
    // ?를 붙이는 이유는 물음표(?) 앞에 있는 내용이 undefined면 뒤에 내용을 찾지 않게하기위해 쓴다.
    // setValue는 사용자가 입력값을 주면 작성했던 내용들을 없애준다
   const { register, watch, handleSubmit, formState:{errors}, setError, setValue } = useForm<IForm>({ defaultValues: {email:"@naver.com"} });
   const onValid = (data:IForm) => {
       console.log(data);
       if(data.password !== data.password2){
           setError("password", {message:"password are not same"}, {shouldFocus:true})
       }
        setValue("email","");
        setValue("id","");
        setValue("password","");
        setValue("password2","");
   };
   // console.log(watch());
   console.log(errors);
   return(
       <div>
           <form style={{ display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
               <input {...register("email", {pattern: { value: /^[A-Za-z0-0._%+-]+@naver.com$/, message: "only @naver.com"}})} required minLength={10} placeholder="Email" /> 
                    <span>{errors?.email?.message}</span>
               <input {...register("id", { 
                   required: true, 
                   validate: { 
                       nohyunba: (value) => value.includes("hyunba") ? "Don't typing hyunba" : true,
                       noNick: (value) => value.includes("nick") ? "Don't typing nick" : true
                    } })} placeholder="Write your ID" />
                    <span>{errors?.id?.message}</span>
               <input {...register("password", { required: "Password is required", minLength: {value:5, message: "hi"} })} placeholder="Write your password" />
                    <span>{errors?.password?.message}</span>
                <input {...register("password2", { required: "Same Password is required", minLength: {value:5, message: "hi"} })} placeholder="Write your password" />
                    <span>{errors?.password2?.message}</span>
               <button>Add</button>
           </form>
       </div>
   ); 
}

export default ToDoList;