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

    </div>
  )
}
