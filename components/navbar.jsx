import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/"><a class="navbar-brand">Navbar</a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link href="/projecten">
                        <a class="nav-item nav-link">Projecten</a>
                    </Link>
                    <Link href="/technologieen">
                        <a class="nav-item nav-link">Technologieen</a>
                    </Link>
                    <Link href="/about">
                        <a class="nav-item nav-link">About</a>
                    </Link> 
                </div>
            </div>
        </nav>
    )
}