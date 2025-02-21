import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Globe, Users, BarChart } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">Alliance Causas</div>
            <div className="space-x-4">
              <Button variant="ghost">Inicio</Button>
              <Button variant="ghost">Recursos</Button>
              <Button variant="ghost">Foro</Button>
              <Button variant="ghost">Proyectos</Button>
              <Button variant="ghost">Conexiones</Button>
            </div>
            <Button>Iniciar Sesión</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Alliance Causas</h1>
          <p className="text-xl mb-8">Colabora para alcanzar los Objetivos de Desarrollo Sostenible</p>
          <div className="flex justify-center">
            <Input className="max-w-sm mr-2" placeholder="Buscar recursos, proyectos o conexiones" />
            <Button>
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" /> Recursos Globales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Descubre y comparte recursos para proyectos de ODS.</CardDescription>
              <Button className="mt-4" variant="outline">Explorar Recursos</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" /> Colaboración
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Conéctate con socios y trabaja en iniciativas de ODS.</CardDescription>
              <Button className="mt-4" variant="outline">Unirse al Foro</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-5 w-5" /> Seguimiento de Progreso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Monitorea y reporta tus esfuerzos de implementación de ODS.</CardDescription>
              <Button className="mt-4" variant="outline">Ver Dashboard</Button>
            </CardContent>
          </Card>
        </section>
    </div>
  )
}
