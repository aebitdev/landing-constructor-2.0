export const FAQ = () => {
  return (
    <section className="faq">
      <h2>FAQ</h2>
      <div className="faq__wrapper">
        {/*возможно вынесу в отдельный компонент*/}
        <div className="faq__wrapper__question_block">
          <h3 className="question_block__question"></h3>
          <p className="question_block__answer"></p>
        </div>
      </div>
    </section>
  )
}