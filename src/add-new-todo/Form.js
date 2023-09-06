import useForm from "./useForm";

const FORM_ENDPOINT = "http://localhost:8080/api/todos"; 

const Form = ({updateTodoList}) => {
  const additionalData = {
    sent: new Date().toISOString(),
    isDone: false
  };

  const { handleSubmit, status, message, isMessageVisible } = useForm({
    additionalData, updateTodoList
  });

  return (
<>

<hr/>
    <form
      className="form-group row"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
    <div className="pt-2 px-4 mb-0 col-sm-2"><label htmlFor ="usr"><h5>Add todo:</h5></label></div>

      <div className="pt-0 mb-0 col-sm-4">
        <textarea
          placeholder="Your todo"
          name="todoName"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      {status !== "loading" && (
        <div className="pt-0 mb-0 col-sm-4">
          <button
            className="bg-primary focus:outline-none px-6 py-3 mb-1 mr-1  font-bold text-white uppercase rounded shadow "
            type="submit"
          >
            Create To Do
          </button>

        </div>
      )}
    </form>
    {status === "success" && isMessageVisible && (
              <div className="ml-3">
                  <div className="text-2xl">It was submitted!</div>
                  <div className="text-md">{message}</div>
              </div>
      )}
      {status === "error" && isMessageVisible && (
              <div className="ml-3">
                  <div className="text-2xl">Something bad happened!</div>
                  <div className="text-md">{message}</div>
              </div>

      )}

    </>
  );
};

export default Form;

