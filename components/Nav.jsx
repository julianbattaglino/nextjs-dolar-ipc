import Link from "next/link";

const Nav = () => {
    return (

        <>
            <nav className="pt-10 flex justify-center">

                <span class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <Link className="" href="/">
                        <button class="border-solid border-r-2 inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800">
                            Cotizaciòn Dolares
                        </button>
                    </Link>
                    <Link className="" href="/inflacion">
                        <button class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800">
                            Datos Inflaciòn
                        </button>
                    </Link>
                </span>

            </nav>
        </>
    )
}

export default Nav;