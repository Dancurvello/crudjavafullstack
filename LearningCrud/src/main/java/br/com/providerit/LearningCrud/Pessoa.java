package br.com.providerit.LearningCrud;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // Quando uma classe for entidade na modelagem de dados
public class Pessoa {

    // Criando os atributos dessa classe
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nome;

    public Pessoa() {
        // Construtor vazio necessário para o Hibernate
    }

    public Pessoa(String nome) {
        this.nome = nome;
    }

    //Criando os getters and setters dos atributos
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


}
