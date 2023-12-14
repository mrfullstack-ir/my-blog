import style from "../../styles/posts/loaderButton.module.css"

export const LoaderButton = () => {
    return (
        <>
        <div className={style.loaderContainer}>
            <button>
                بارگذاری بیشتر
            </button>
        </div>
        </>
    )
}