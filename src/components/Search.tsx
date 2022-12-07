import styled from "styled-components";

interface propsType {
    id : string
}
export function Search({id} : propsType){
    const SearchBox = styled.div`
        padding:20px 0;
        opacity:0;
        overflow:hidden;
        transition:all 0.3s ease;

        &.on{
            opacity:1;
            overflow:visible;
        }
    `;

    const FormBox = styled.form`
        display:flex;
        margin:15px 0;

        input{
            flex:1;
            display:block;
            width:100%;
            height:48px;
            padding:5px 10px;
            margin-right:10px;
            font-size:16px;
            border:1px solid #e5e5e5;
            border-radius:5px;
        }

        button{
            display:block;
            width:100px;
            height:48px;
            font-size:18px;
            font-weight:bold;
            color:#fff;
            background-color:#7ec9d5;
            border-radius:5px;
            border:none;
        }
    `;

    const CategoryBox = styled.ul`
        display:flex;

        .list-item{
            display:inline-block;
            padding:10px 15px;
            font-size:16px;
            border:1px solid #e5e5e5;
            border-radius:20px;

            &:not(:first-child){
                margin-left:10px;
            }
        }
    `;
    return (
        <SearchBox id={id}>
            <FormBox action="post">
                <input type="text" placeholder="주소 또는 사업장 입력" />
                <button type="button">검색</button>
            </FormBox>
            <CategoryBox>
                <li className="list-item">카테고리1</li>
                <li className="list-item">카테고리2</li>
                <li className="list-item">카테고리3</li>
                <li className="list-item">카테고리4</li>
                <li className="list-item">카테고리5</li>
                <li className="list-item">카테고리6</li>
            </CategoryBox>
        </SearchBox>
    )
}