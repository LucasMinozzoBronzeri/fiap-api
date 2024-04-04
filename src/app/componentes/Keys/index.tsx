interface Props {
    field: string;
    value: string;
}

const Key = (props: Props) => {
    return(
        <div>
            <label>{props.field}</label>
            <div>{props.value}</div>
        </div>
    )
};
 export default Key;