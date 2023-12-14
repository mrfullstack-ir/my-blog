import style from "../../styles/posts/postItem.module.css"

export const PostItem = () => {
    return (
        <>
            <div className={style.postItemContainer}>
                <img
                    src="https://api2.zoomit.ir/media/intel-core-ultra-meteor-lake-official-render-657b190b8412edb5a5b9851a?w=1920&q=75"
                    alt=""/>
                <h6>
                    کلاینت
                </h6>
                <h1>
                    نه نکته‌ی جالب درباره وردپرس که شاید نمی‌دانستید
                </h1>
                <p>
                    وردپرس از زمان انتشار اولین نسخه تا کنون تغییرات زیادی داشته است و حتی افرادی که سال‌ها با وردپرس
                    کار کرده‌اند نیز ممکن است با برخی ویژگی‌های آن آشنایی نداشته باشند.
                </p>
            </div>
        </>
    )
}