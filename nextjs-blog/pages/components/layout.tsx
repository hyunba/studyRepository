import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/posts/second-post',
      title: 'User Data',
    },
    {
      href: '/posts/fourth-post',
      title: 'Vip 회원 명단',
    },
    {
        href: '/posts/third-post',
        title: 'graph',
    },
    {
        href: '/posts/fifth-post',
        title: 'graph',
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-gray-500 sticky top-0 h-16 flex justify-center items-center font-semibold uppercase'>
       vic game studios frontend test
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-gray-400 w-full md:w-60'>
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className='m-2' key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-gray-200 rounded hover:bg-gray-600 cursor-pointer ${
                        router.asPath === href && 'text-gray-900'
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}