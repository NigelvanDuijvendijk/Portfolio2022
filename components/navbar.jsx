import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/"><a className="navbar-brand">Navbar</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link href="/projecten">
                        <a className="nav-item nav-link">Projecten</a>
                    </Link>
                    <Link href="/technologieen">
                        <a className="nav-item nav-link">Technologieen</a>
                    </Link>
                    <Link href="/about">
                        <a className="nav-item nav-link">About</a>
                    </Link> 
                </div>
            </div>
        </nav>
    )
}