function QuestionsPage(){
    return(
        <>
        <div className="header_row">
    <h1 className="content_header">Top Questions</h1>
    <button className="askbut" onClick="">Add Question</button>
    </div>
    <table className="topics">
        <tr className="topics_name">
            <td>Interesting</td>
            <td>Bounded</td>
            <td>Hot</td>
            <td>Week</td>
            <td>Month</td>
        </tr>
    </table>
    <div className="ques_head">
        <div className="qua_opt"><span className="qua_opi">0</span>Votes </div>
        <div className="qua_opt"><span className="qua_opi"> 1</span>answers</div>
        <div className="qua_opt"><span className="qua_opi">28</span>views</div>
        <div class="qua_right">
        <div className="questi">Getting String in quotes in javascript</div>
        <div className="tag_con">
            <div class="tag_con1">
            <p class="tag">javascript</p>
            <p class="tag">parsing</p>
            <p class="tag">string</p>
            </div>
            <div class="whenandwhom">
                asked <span className="user">karthick</span> 2 min ago
            </div>

        </div>
        </div>
    </div>
       </>
    );
}

export default QuestionsPage;