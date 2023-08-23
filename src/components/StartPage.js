import Button from "./Button"

const StartPage = ({ handleSubmit, handleChange, formData }) => {
 
  return (
    <section className="container mx-auto 
    flex flex-col gap-4 md:container md:mx-auto md:max-w-xl">
      <h1 className="text-blue-900 text-center 
      mx-auto font-bold text-4xl my-2 md:container">Quizzical</h1>
      <p className="text-blue-900 text-center 
      mx-auto font-semibold text-3xl md:container">Test your knowledge</p>
      <form onSubmit={handleSubmit} 
        className="flex flex-col shrink sm:mx-auto gap-3 max-w-md md:container md:mx-auto">
        <label className="text-blue-800 font-semibold text-lg" 
          htmlFor="amount">
          Kindly Select Number of Questions:</label>
        <input 
          type="number" min={1} max={20}
          value={formData.amount}
          onChange={handleChange}
          id="amount" name="amount"
          className="h-10 px-4 rounded-lg text-blue-850" />

        <label className="text-blue-800 font-semibold text-lg" htmlFor="category">
          Select Category:</label>
        <select
          className="h-10 px-4 rounded-lg text-blue-800"
          id="category"
          value={formData.category}
          onChange={handleChange}
          name='category'>
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>	
        </select>

        <label className="text-blue-800 font-semibold text-lg" htmlFor="difficulty">
          Select Difficulty:</label>
        <select 
          name="difficulty"
          id="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="h-10 px-4 rounded-lg text-blue-800">
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label className="text-blue-800 font-semibold text-lg" htmlFor="type">
          Select Type:</label>
        <select 
          name="type"
          id="type"
          value={formData.type}
          onChange={handleChange}
          className="h-10 px-4 rounded-lg text-blue-800">
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>

        <Button type='submit'>Start Quiz</Button>
      </form>
    </section>
  )
}

export default StartPage