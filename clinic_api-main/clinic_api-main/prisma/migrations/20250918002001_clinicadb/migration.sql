-- CreateTable
CREATE TABLE "public"."usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Prontuario" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "medico_responsavel_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "Prontuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Consulta" (
    "id" SERIAL NOT NULL,
    "motivo" TEXT NOT NULL,
    "data_consulta" TIMESTAMP(3) NOT NULL,
    "observacoes" TEXT NOT NULL,
    "medico_responsavel_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT NOT NULL,
    "responsavel" TEXT,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Exame" (
    "id" SERIAL NOT NULL,
    "tipo_exame" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "data_exame" TIMESTAMP(3) NOT NULL,
    "link_arquivo" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "Exame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "public"."usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."Prontuario" ADD CONSTRAINT "Prontuario_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "public"."Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Prontuario" ADD CONSTRAINT "Prontuario_medico_responsavel_id_fkey" FOREIGN KEY ("medico_responsavel_id") REFERENCES "public"."usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Consulta" ADD CONSTRAINT "Consulta_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "public"."Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exame" ADD CONSTRAINT "Exame_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "public"."Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
