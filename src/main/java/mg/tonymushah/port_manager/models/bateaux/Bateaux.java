package mg.tonymushah.port_manager.models.bateaux;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import mg.tonymushah.port_manager.enums.BateauxOrigin;
import mg.tonymushah.port_manager.enums.BateauxType;

@Entity
public class Bateaux {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Enumerated
    @NotBlank
    private BateauxType type;

    @Enumerated
    @NotBlank
    private BateauxOrigin origin;

    @NotBlank
    private int profondeur;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public BateauxType getType() {
        return type;
    }

    public void setType(BateauxType type) {
        this.type = type;
    }

    public BateauxOrigin getOrigin() {
        return origin;
    }

    public void setOrigin(BateauxOrigin origin) {
        this.origin = origin;
    }

    public int getProfondeur() {
        return profondeur;
    }

    public void setProfondeur(int profondeur) {
        this.profondeur = profondeur;
    }

    
}
