Use State:

--> The initial value of useState will initialize the state value when we re- render the compoment by the use of arrow function and then returning the value will initialize only once and then it won't, this would be helpful in some complex computation(generally not preferred).
Ex: const [count, setCount] = useState(()=>{
return 0;
})
--> When we initialize useStates with the object and arrays then while updating we should always use spread operator and then modify any property, because the setState will update the values and not append it to the original object.
--> Change in state variable value re-renders the component.

UseEffect:

--> If dependency array is missing then too the useEffect works and it will run the code inside it after every re-render.
--> If only empty array is present then it will work as mounting of component.
--> If anything is present in array then it will run code inside it in change of array value.

UseMemo:

--> Although useMemo gives us caching abilities it shouldn't be used everytime, as it will block unnecessary memory, so it should be only used for storing time taking operations, so that they are not performed everytime our components re-renders.
--> Referrential equality : This means that it doesnot run a perticular code only on change of value but on change of reference(as in case of useEffect which changes on refrence in case of objects and arrays).

UseRef:

--> It's main usecase is to prevent the component from re-rendering multiple times due to updation of state variable.
--> All the jsx elements have a property called as "ref" pre-defined so that we can directly attach useRef() to them and then can refernce them. It can perform the same action as document query selector in the DOM node.
Ex: const inputRef = useRef();
--> The ref we create is an object with the "current" property which will contain the value we pass.
--> We should use ref only for referncing purpose and not performing the onchange event.

UseCallBack:

--> It's quite similar to UseMemo i.e it helps us preventing a perticular to re-run due to re-rendering of component. The major difference is that useMemo returns a value when we write a function inside it while useCallBack returns the entire function.
