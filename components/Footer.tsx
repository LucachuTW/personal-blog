export default function Footer() {
  return (
    <footer className="bg-background py-6 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Lucachu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}